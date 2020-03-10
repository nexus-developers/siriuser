import React, { Component } from 'react';

import { Container } from '../../../styles/Container'
import { Title, Divisor, InternContainer, InternContainer2, Form, FormPreView } from './styles';

import Maps from '../../../components/Map/Map'

import firebase from '../../../firebase'


export default class pages extends Component {
  state = {
    clients: [],
    etapa: '',
    consumo: '',
    tensao: '',
    kits: '',
    fases: '',
    projects: [],
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

  componentDidMount(){
    this.getUserData();
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
      const { clients } = this.state;
      return (
        <Container className=''>
        <Maps/>

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
                <ul className='list-group'>
                <h5>Pré-Visualização dos dados cadastrados.</h5>
                  <li className='list-group-item'><strong>Cliente</strong>: {this.state.cliente}</li>
                  <li className='list-group-item'><strong>Etapa</strong>: {this.state.etapa}</li>
                  <li className='list-group-item'><strong>Consumo</strong>: {this.state.consumo} </li>
                  <li className='list-group-item'><strong>Tensão</strong>: {this.state.tensao} </li>
                  <li className='list-group-item'><strong>KIT</strong>: {this.state.kits} </li>
                  <li className='list-group-item'><strong>Fases</strong>: {this.state.fases} </li>
                </ul>
                <h3>Total Estimado: R$ 4500,00</h3>
                <button type='submit'>Criar Projeto</button>
            </FormPreView>
        </Container> 
    );
  }
}

