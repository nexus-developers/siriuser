import React, { Component } from 'react';

import ReactSearchBox from 'react-search-box'

import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import { Container } from '../../../styles/Container'

import { MdDelete } from "react-icons/md";

import { 
  Title, 
  Divisor, 
  InternContainer,
  Dispositions, 
  Form, 
  FormPreView, 
  DispositionsForm,
  ModuleSelection,
  DivisorButton,
  FinancialContainer,
  FinancialButton,
  TopNavigation,
  NavigationRoute,
  NavigationButton,
  HR1,
  HR2,
  RouteName,
  MapsDiv,
  GeneratePreView,
  ButtonAddModule,
  ModuleQuantity,
  ModuleButton
} from './styles';

import Maps from '../../../components/Map/Map'

import firebase from '../../../firebase'

import Vertical from './Assets/vertical.png'
import Horizontal from './Assets/horizontal.png'

// import { calculo } from './Calculo';

import api from '../../../services/api';
import { 
  formatPrice 
} from '../../../util/formt';

class pages extends Component {
  constructor(props){
    super(props);
    this.calculo = this.calculo.bind(this);
    this.state = {
      clients: [],
      visualization: false,
      etapa: '',
      consumo: '',
      tensao: '',
      kits: '',
      fases: '',
      projects: [],
      data: [],
      products: [],
      type: [],
      sistema: 0,
      placa: 0,
      placaW: 0,
      micros: 0,
      gTerminais: 0,
      gIntermediarios: 0,
      dispModulo: '',
      fixadores: 0,
      perfis: 0,
      juncoes: 0
    }
  }

  // requisitar clientes
  getUserData = () => {
    const clients = localStorage.getItem('clients');
    
    if(clients){
      this.setState({ clients: JSON.parse(clients) });
    }
    
    const projects = localStorage.getItem('projects');
    
    if(projects){
      this.setState({ projects: JSON.parse(projects) });
    }
  }

  //gravar projetos
  writeProjects(){
    const { projects } = this.state;
    firebase.database().ref().child('projects').set(this.state.projects);
    
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  async componentDidMount(){
    //importação clientes para tela de projetos
    await this.getUserData();

    const { clients } = this.state;
    const infos = clients.map(item => ({
      ...item,
      value: item.name
    }))

    this.setState({data: infos})

    //importação componentes
    const response = await api.get('products');

    const data = await response.data.map(product => ({
      ...product,
      priceFormat: formatPrice(product.price)
    }));

    this.setState({products: data});

    //produção da modulo fotovoltaico
    const placaW = data.map(product => ({
      producao: product.producao
    }))
    this.setState({placaW: placaW[0]})
  }

  cliente = event => {
    this.setState({
      cliente: event.target.value
    })
  }

  etapa = event => {
    this.setState({
      etapa: event.target.value
    })
  }

  consumo = event => {
    this.setState({
      consumo: event.target.value 
    });
    this.calculo();
  }

  tensao = event => {
    this.setState({
      tensao: event.target.value
    })
  }

  kits = event => {
    this.setState({
      kits: event.target.value
    })
  }

  fases = event => {
    this.setState({
      fases: event.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault();

    const uid = this.refs.uid.value;
    const client = this.refs.client.value;
    const etapa = this.refs.categoria.value;
    const consumo = this.refs.consumo.value;
    // const tensao = this.refs.tensao.value;
    // const kit = this.refs.kit.value;
    // const fase = this.refs.fase.value;

    // if(uid && client && etapa && consumo && tensao && kit && fase){
    if(uid && client && etapa && consumo){
      const { projects } = this.state;
      const projectIndex = projects.findIndex(data => {
        return data.uid = uid;
      });
      projects[projectIndex].client = client;
      projects[projectIndex].etapa = etapa;
      projects[projectIndex].consumo = consumo;
      // projects[projectIndex].tensao = tensao;
      // projects[projectIndex].kit = kit;
      // projects[projectIndex].fase = fase;
    }
    // else if(uid ,client && etapa && consumo && tensao && kit && fase){
     else if(uid ,client && etapa && consumo){
      const uid = new Date().getTime().toString();
      const { projects } = this.state;
      // projects.push({ uid ,client, etapa, consumo, tensao, kit, fase });
      projects.push({ uid ,client, etapa, consumo});
      this.setState({ projects });
    }

    this.writeProjects();

    this.refs.uid.value = '';
    this.refs.client.value = '';
    this.refs.categoria.value = '';
    this.refs.consumo.value = '';
    // this.refs.tensao.value = '';
    // this.refs.kit.value = '';
    // this.refs.fase.value = '';
  }

  async calculo(){
    const { placaW } = this.state;
    const consumo = this.refs.consumo.value;
    let sistema = 0;
    let placas = 0;
    //calculo quantidade de placa
    while(consumo > sistema){
      placas++;
      sistema = sistema + placaW.producao;
    }
    await this.setState({placa: placas});

    //calculo quantidade de micros
    let micro = 0;
    let placaM = placas;
    while(placaM > 0){
      micro++
      placaM = placaM - 4;
      if(placaM < 0){
        placaM = 0;
      }
    }
    await this.setState({micros: micro});
  }

  calculoLinhas(){
    const { placa, dispModulo} = this.state
    const linhas = this.refs.linhas.value;
    const mLinhas = this.refs.mLinhas.value;

    //calculo de gramps terminais
    let gTerminais = 4 * linhas;
    this.setState({ gTerminais })

    //Calculo grampos intermediarios
    let gIntermediarios = (placa - 1) * 2;
    this.setState({ gIntermediarios })

    //disposição de modulos
    let dimensoes;
    if(dispModulo === 'vertical'){
      dimensoes = 1;
    }
    else{
      dimensoes = 2;
    }
    
    //calculo quantidades de fixadores
    let fixadores = Math.trunc(((((placa * dimensoes)-1)/1,5)+1)*2)
    this.setState({ fixadores })

    //calculo de perfis
    let perfis = Math.round(((placa * dimensoes)/4.2)*2)
    this.setState({ perfis })

    //calculo de junções
    let juncoes = perfis - 2;
    this.setState({ juncoes })
  }

  //transferir informações para analise financeira
  openAnalise = () => {
    const { placa, micros, gTerminais, gIntermediarios, fixadores, perfis, juncoes } = this.state;
    const { dispatch } = this.props;

    dispatch({
      type: 'ANALISE_OPEN',
      placa,
      micros,
      perfis,
      gIntermediarios,
      gTerminais,
      fixadores,
      juncoes
    })
  }

  render() {
      const { data, placa, products, micros, gTerminais, gIntermediarios, fixadores, perfis, juncoes} = this.state;
      return (
        <Container className=''>

          <TopNavigation>

            <NavigationRoute style={{ marginLeft: '100px' }} >
              <RouteName active>DIMENSIONAMENTO</RouteName>
              <NavigationButton active />
            </NavigationRoute>

              <HR1/>

            <NavigationRoute>
              <RouteName>ANÁLISE FINANCEIRA</RouteName>
              <Link onClick={() => this.openAnalise()} to='/payment'>
                < NavigationButton />
              </Link>
            </NavigationRoute>

              <HR2/>

              <NavigationRoute style={{ marginRight: '165px'}} >
              <RouteName>PROPOSTA</RouteName>
              <NavigationButton />
            </NavigationRoute>

          </TopNavigation>

          <MapsDiv style={{ width: '95%' }}>
            {/* chamada do maps na pagina junto com apikey */}
            <Maps 
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAB-xvZm8wx8Doshepy284rjII_U2zZkfs&libraries=places`} 
              loadingElement={<div style={{ height: `100%` }} />} 
              containerElement={<div style={{ height: `300px`}} />}
              mapElement={<div style={{ height: `90%`, borderRadius: 8 }} />}
            />
          </MapsDiv>

          <Title>Orçamento Personalizado</Title>
         
         <InternContainer className='shadow'> 
                <Form onSubmit={this.handleSubmit}> 
                  <input 
                    type='hidden'
                    ref='uid' />
                    
                    <Divisor>
                      <div>
                        <label>Cliente:</label>
                        <small>Os clientes devem estar cadastrados no sistema.</small>
                        <div style={{ position: 'absolute'}}>
                          {/* pesquisar clientes pelo nome dele */}
                          <ReactSearchBox
                            placeholder="Digite o nome do cliente"
                            data={data}
                            onSelect={record => console.log(record)}
                            onChange={value => console.log(value)} 
                            ref='client'/>
                        </div>
                        {/* <select  className="form-control" onChange={this.cliente} ref='client'>
                        <option value=''></option>
                          {
                            clients.map(client => 
                                <option key={client.uid} value={ client.name }>{ client.name }</option>
                              )
                          }
                        </select> */}
                       
                      </div>
                      <div style={{ marginLeft: '240px' }}>
                        <label>Etapa de Venda:</label>
                        <small>Etapa de venda Integrador Cliente.</small>
                        <select className="form-control" ref='categoria' onChange={this.etapa}>
                          <option></option>
                          <option value='Proposta Enviada'>Proposta Emitida</option>
                          <option value='Proposta Apresentada'>Proposta Apresentada</option>
                          <option value='Negociação'>Negociação</option>
                          <option value='Projeto Cancelado'>Projeto Cancelado</option>
                          <option value='Projeto Vendido'>Projeto Vendido</option>
                        </select>
                      </div>
                    </Divisor>
                    
                    <Divisor>
                      <div>
                      <label>Consumo / Potência</label>
                        <select className="form-control" style={{width: '150px'}}>
                          <option></option>
                          <option>Consumo</option>
                          <option>Potência</option>
                        </select>
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ color: '#FFF' }}>Mensal: ( kWh )</label>
                        <input 
                          type='text' 
                          className='form-control'
                          placeholder='150'
                          ref='consumo'
                          value={this.state.consumo}
                          onChange={this.consumo}
                          style={{width: '100px'}}
                        /> 
                      </div>

                      {/* <div>
                        <label>Módulo:</label>
                        <select className="form-control" ref='kit' onChange={this.kits} style={{width: '270px'}}>
                          <option ></option>
                          <option value='Kit1'>KIT 1</option>
                          <option value='Kit2'>KIT 2</option>
                          <option value='kit3'>KIT 3</option>
                          <option value='kit4'>KIT 4</option>
                        </select>
                      </div> */}

                      {/* <div>
                        <label>Fab. Inversor:</label>
                        <select className="form-control" ref='kit' onChange={this.kits} style={{width: '270px'}}>
                          <option ></option>
                          <option value='Kit1'>KIT 1</option>
                          <option value='Kit2'>KIT 2</option>
                          <option value='kit3'>KIT 3</option>
                          <option value='kit4'>KIT 4</option>
                        </select>
                      </div> */}
                      
                      {/* <div>
                        <label>Kits:</label>
                        <select className="form-control" ref='kit' onChange={this.kits} style={{width: '100px'}}>
                          <option ></option>
                          <option value='Kit1'>KIT 1</option>
                          <option value='Kit2'>KIT 2</option>
                          <option value='kit3'>KIT 3</option>
                          <option value='kit4'>KIT 4</option>
                        </select>
                      </div> */}
                     
                    </Divisor> 
                    <hr style={{ width: '95%' }}/>
                    {/* <Divisor>
                    <div>
                        <label>Tipo de Estrutura:</label>
                        <select className="form-control" ref='fase'  style={{width: '150px'}}>
                          <option ></option>
                          <option >Bifásico</option>
                          <option >Trifásico</option>
                        </select>
                      </div>

                      <div>
                        <label>Tensão:</label>
                        <select className="form-control" ref='tensao' onChange={this.tensao} style={{width: '150px'}}>
                          <option ></option>
                          <option value='127 / 220'>127 / 220</option>
                          <option value='127 / 220'>220 / 380</option>
                        </select>
                      </div>
                      
                      <div>
                        <label>Fases:</label>
                        <select className="form-control" ref='fase' onChange={this.fases} style={{width: '150px'}}>
                          <option ></option>
                          <option value='Bifásico'>Bifásico</option>
                          <option value='Bifásico'>Trifásico</option>
                        </select>
                      </div>
                    </Divisor> */}

                    <GeneratePreView >
                      <button
                        onClick={() => this.setState({ visualization: true })}
                      >
                        Visualizar
                      </button>
                    </GeneratePreView>
                    
            </Form>  
          </InternContainer>
          
          {
            this.state.visualization ? (
              <>
                <Title>Análise de itens</Title>
                <FormPreView className='shadow'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Descrição do Produto</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col"/>
                      </tr>
                    </thead>
                    <tbody>
                      {/* logica para mostrar components */}
                      {
                        placa > 0 ? (
                          <tr>
                            <td scope="row">{products[0].id}</td>
                            <td>{products[0].title}</td>
                            <td>
                              <input type='number' onInput={(e) => this.setState({placa: e.target.value})} value={placa} className='form-control' style={{ height: '30px', width: '100px', marginTop: '0px' }} />
                            </td>
                            <td>
                              <button onClick={() => this.setState({placa: 0})} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                                <MdDelete size={30} color='#ff0000' />
                              </button> 
                            </td>
                          </tr>
                        ) : ( null )
                      }
                      {
                        micros > 0 ? (
                          <tr>
                            <td scope="row">{products[1].id}</td>
                            <td>{products[1].title}</td>
                            <td>
                              <input type='number' onInput={(e) => this.setState({micros: e.target.value})} value={micros} className='form-control' style={{ height: '30px', width: '100px', marginTop: '0px' }} />
                            </td>
                            <td>
                              <button onClick={() => this.setState({micros: 0})} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                                <MdDelete size={30} color='#ff0000' />
                              </button> 
                            </td>
                          </tr>
                        ) : ( null )
                      }
                      {
                        perfis > 0 ? (
                          <tr>
                            <td scope="row">{products[2].id}</td>
                            <td>{products[2].title}</td>
                            <td>
                              <input type='number' onInput={(e) => this.setState({perfis: e.target.value})} value={perfis} className='form-control' style={{ height: '30px', width: '100px', marginTop: '0px' }} />
                            </td>
                            <td>
                              <button onClick={() => this.setState({perfis: 0})} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                                <MdDelete size={30} color='#ff0000' />
                              </button> 
                            </td>
                          </tr>
                        ) : ( null )
                      }
                      {
                        gIntermediarios > 0 ? (
                          <tr>
                            <td scope="row">{products[3].id}</td>
                            <td>{products[3].title}</td>
                            <td>
                              <input type='number' onInput={(e) => this.setState({gIntermediarios: e.target.value})} value={gIntermediarios} className='form-control' style={{ height: '30px', width: '100px', marginTop: '0px' }} />
                            </td>
                            <td>
                              <button onClick={() => this.setState({gIntermediarios: 0})} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                                <MdDelete size={30} color='#ff0000' />
                              </button> 
                            </td>
                          </tr>
                        ) : ( null )
                      }
                      {
                        gTerminais > 0 ? (
                          <tr>
                            <td scope="row">{products[4].id}</td>
                            <td>{products[4].title}</td>
                            <td>
                              <input type='number' onInput={(e) => this.setState({gTerminais: e.target.value})} value={gTerminais} className='form-control' style={{ height: '30px', width: '100px', marginTop: '0px' }} />
                            </td>
                            <td>
                              <button onClick={() => this.setState({gTerminais: 0})} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                                <MdDelete size={30} color='#ff0000' />
                              </button> 
                            </td>
                          </tr>
                        ) : ( null )
                      }
                      {
                        fixadores > 0 ? (
                          <tr>
                            <td scope="row">{products[5].id}</td>
                            <td>{products[5].title}</td>
                            <td>
                              <input type='number' onInput={(e) => this.setState({fixadores: e.target.value})} value={fixadores} className='form-control' style={{ height: '30px', width: '100px', marginTop: '0px' }} />
                            </td>
                            <td>
                              <button onClick={() => this.setState({fixadores: 0})} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                                <MdDelete size={30} color='#ff0000' />
                              </button> 
                            </td>
                          </tr>
                        ) : ( null )
                      }
                      {
                        juncoes > 0 ? (
                          <tr>
                            <td scope="row">{products[6].id}</td>
                            <td>{products[6].title}</td>
                            <td>
                              <input type='number' onInput={(e) => this.setState({juncoes: e.target.value})} value={juncoes} className='form-control' style={{ height: '30px', width: '100px', marginTop: '0px' }} />
                            </td>
                            <td>
                              <button onClick={() => this.setState({juncoes: 0})} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none' }}>
                                <MdDelete size={30} color='#ff0000' />
                              </button> 
                            </td>
                          </tr>
                        ) : ( null )
                      }
                    </tbody>
                  </table>
                </FormPreView>
              </>
            ) : (
              <div style={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '40px' }}>
                <hr style={{ width: '400px', color: '#6E6E6E', marginLeft: '30px', height: '3px' }}/>
                  <p style={{ color: "#6E6E6E", fontWeight: 'bold' }}>Não há orçamentos para visualizar</p>
                <hr style={{ width: '400px', color: '#6E6E6E', marginRight: '30px', height: '3px'  }}/>
              </div>
            )
          }

            <Title>Disposição dos Módulos</Title>
          <div style={{ padding:'20px', borderRadius: '4px', width: '95%' }} className='shadow'>
            <Dispositions>
              <DispositionsForm>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '50px' }}>
                  <ButtonAddModule className='shadow'>
                    <FiPlus color='#FFF' size={25} />
                    <span>Novo Módulo</span>
                  </ButtonAddModule>
                  <ModuleQuantity className='shadow' >
                    <h5 style={{ textAlign: 'center' }}>Modúlos: {placa}</h5>
                  </ModuleQuantity>
                </div>


                <label>Número de Linhas:</label>
                <input className='form-control' type='number' ref='linhas' />

                <label>Número de Módulos por Linha:</label>
                <input className='form-control' type='number' ref='mLinhas' />
              </DispositionsForm>
              <ModuleSelection>
              <button className='btn btn-danger mr-3' style={{ height: '40px', marginTop: '20px', width: '100px', backgroundColor: '#F54141', fontWeight: 'bold', border: 'none' }}>Excluir</button>
                <div>
                  <DivisorButton>
                    <ModuleButton className='shadow' onClick={() => this.setState({ dispModulo: 'vertical' })} >
                      <img src={Vertical} />
                    </ModuleButton>
                    <label>Vertical</label>
                  </DivisorButton>
                </div>
                <div>
                  <DivisorButton >
                    <ModuleButton selected className='shadow' onClick={() => this.setState({ dispModulo: 'horizontal' })} >
                      <img src={Horizontal} />
                    </ModuleButton>
                    <label>Horizontal</label>
                  </DivisorButton>
                </div>
              </ModuleSelection>

            </Dispositions>  
              <GeneratePreView >
                <button onClick={() => this.calculoLinhas()}>
                  Recalcular
                </button>
            </GeneratePreView>
          </div>

          <FinancialContainer>
            <Link to='/payment'>
              <FinancialButton>
                Ir para Análise Financeira
              </FinancialButton>
            </Link>
          </FinancialContainer>                 
        </Container> 
    );
  }
}

export default connect()(pages);