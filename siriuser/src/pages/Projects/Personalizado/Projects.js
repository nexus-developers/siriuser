import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box'
import { Link } from 'react-router-dom'

import { Container } from '../../../styles/Container'
import { 
  Title, 
  Divisor, 
  InternContainer,
  Dispositions, 
  Form, 
  FormPreView, 
  Quantity, 
  DispositionsForm,
  ModuleSelection,
  DivisorButton,
  Charts,
  FinancialContainer,
  FinancialButton
} from './styles';

import Maps from '../../../components/Map/Map'

import firebase from '../../../firebase'

import Vertical from './Assets/vertical.png'
import Horizontal from './Assets/horizontal.png'

import Barchart from '../../../components/Charts/BarChart'


export default class pages extends Component {
  state = {
    clients: [],
    etapa: '',
    consumo: '',
    tensao: '',
    kits: '',
    fases: '',
    projects: [],
    data: []
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
    await this.getUserData();

    const { clients } = this.state;
    const infos = clients.map(item => ({
      ...item,
      value: item.name
    }))

    this.setState({data: infos})
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

    //calculo temporario de kits
    const { consumo } = this.state;
    if(consumo <= 150){
      this.setState({ kits: 'Kit1' });
    }
    else if(consumo > 150 && consumo <= 250){
      this.setState({ kits: 'Kit2' });
    }
    else if(consumo > 250 && consumo <= 350){
      this.setState({ kits: 'Kit3' });
    }
    else{
      this.setState({ kits: 'Kit4' });
    }
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
    const tensao = this.refs.tensao.value;
    const kit = this.refs.kit.value;
    const fase = this.refs.fase.value;

    if(uid && client && etapa && consumo && tensao && kit && fase){
      const { projects } = this.state;
      const projectIndex = projects.findIndex(data => {
        return data.uid = uid;
      });
      projects[projectIndex].client = client;
      projects[projectIndex].etapa = etapa;
      projects[projectIndex].consumo = consumo;
      projects[projectIndex].tensao = tensao;
      projects[projectIndex].kit = kit;
      projects[projectIndex].fase = fase;
    }
     else if(uid ,client && etapa && consumo && tensao && kit && fase){
      const uid = new Date().getTime().toString();
      const { projects } = this.state;
      projects.push({ uid ,client, etapa, consumo, tensao, kit, fase });
      this.setState({ projects });
    }

    this.writeProjects();

    this.refs.uid.value = '';
    this.refs.client.value = '';
    this.refs.categoria.value = '';
    this.refs.consumo.value = '';
    this.refs.tensao.value = '';
    this.refs.kit.value = '';
    this.refs.fase.value = '';
  }

  

  render() {
      const { clients, data } = this.state;
      console.log(clients)
      return (
        <Container className=''>
          <div style={{width: '95%'}}>
            <Maps 
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAB-xvZm8wx8Doshepy284rjII_U2zZkfs&libraries=places`} 
              loadingElement={<div style={{ height: `100%` }} />} 
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}/>
          </div>

         <InternContainer> 
        <hr style={{ width: '95%' }}/>
                <Form onSubmit={this.handleSubmit}> 
                  <input 
                    type='hidden'
                    ref='uid' />
                    <Title> Informações do Cliente </Title>

                    <Divisor>
                      <div>
                        <label>Cliente:</label>
                        <small>Os clientes devem estar cadastrados no sistema.</small>
                        <select  className="form-control" onChange={this.cliente} ref='client'>
                        <option value=''></option>
                          {
                            clients.map(client => 
                                <option key={client.uid} value={ client.name }>{ client.name }</option>
                              )
                          }
                        </select>
                        <ReactSearchBox
                          placeholder="Teste"
                          data={data}
                          onSelect={record => console.log(record)}
                          onChange={value => console.log(value)} />
                      </div>
                      <div>
                        <label>Etapa de Venda:</label>
                        <small>Etapa de venda Integrador Cliente.</small>
                        <select className="form-control" ref='categoria' onChange={this.etapa}>
                          <option ></option>
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
                      
                      <div style={{ display: 'flex', flexDirection: 'column',   }}>
                        <label>Mensal: ( kWh )</label>
                        <input 
                          type='text' 
                          className='form-control'
                          placeholder='150'

                          ref='consumo'


                          value={this.state.consumo}
                          onChange={this.consumo}
                          style={{width: '150px'}}
                        /> 
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
                        <label>Kits:</label>
                        <select className="form-control" ref='kit' onChange={this.kits} style={{width: '150px'}}>
                          <option ></option>
                          <option value='Kit1'>KIT 1</option>
                          <option value='Kit2'>KIT 2</option>
                          <option value='kit3'>KIT 3</option>
                          <option value='kit4'>KIT 4</option>
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
                    </Divisor> 
            </Form>  
          </InternContainer>

          <hr style={{ width: '95%' }}/>
            <FormPreView>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Descrição do Produto</th>
                    <th scope="col">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">001</td>
                    <td>Descrição do produto que vem do estoque.</td>
                    <td>
                      <Quantity>
                        <button>
                          +
                        </button>
                        <label>10</label>
                        <button>
                          -
                        </button>
                      </Quantity>
                    </td>
                  </tr>
                </tbody>
              </table>
            </FormPreView>

            <hr style={{ width: '95%' }}/>   

            <Title>Disposição dos Módulos</Title>
            <Dispositions>
              <DispositionsForm>
                <label>Número de Linhas:</label>
                <input className='form-control' />

                <label>Número de Módulos por Linha:</label>
                <input className='form-control' />
              </DispositionsForm>
              <ModuleSelection>
                <div>
                  <DivisorButton>
                    <label>Vertical</label>
                    <button>
                      <img src={Vertical} />
                    </button>
                  </DivisorButton>
                  
                  <DivisorButton>
                    <label>Horizontal</label>
                    <button selected>
                      <img src={Horizontal} />
                    </button>
                  </DivisorButton>
                </div>
              </ModuleSelection>

            </Dispositions>  
          <button className='btn btn-danger mr-5'>Excluir</button>
          <button className='btn btn-primary'>Recalcular</button>

          <hr style={{ width: '95%' }}/>   
          <Title>Resultado</Title>
          <Charts>
            <Barchart />
            <div>
              <ul className='list-group'>
                <li className='list-group-item'>kWh / kWp / Ano : 380</li>
                <li className='list-group-item'>kWh / kWp / Ano : 380</li>
                <li className='list-group-item'>kWh / kWp / Ano : 380</li>
                <li className='list-group-item'>kWh / kWp / Ano : 380</li>
                <li className='list-group-item'>kWh / kWp / Ano : 380</li>
              </ul>
            </div>                 
          </Charts>
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

