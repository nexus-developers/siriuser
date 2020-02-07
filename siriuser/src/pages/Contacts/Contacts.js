import React, { Component } from 'react';

import { Container } from '../../styles/Container';
import { SecondContainer ,Contact, AddContact, Form, UlClients } from "./styles.js";

import { TiDeleteOutline } from "react-icons/ti";

import firebase from '../../firebase';

export default class Contacts extends Component {
  constructor(props){
    super(props);

    this.state = {
      clients: []
    }
  }

  //gravar firebase
  writeUserData = () => {
    firebase.database().ref('/').set(this.state);
    console.log('salvou so pra saber no console');
  }

  //requisição firebase
  getUserData = () => {
    const ref = firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });

  }
  
  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state){
      this.writeUserData();
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const uid = this.refs.uid.value;
    const name = this.refs.name.value;
    const cpf = this.refs.cpf.value;
    const categoria = this.refs.categoria.value;
    const telefone = this.refs.telefone.value;

    if(uid && name && cpf && categoria && telefone){
      const { clients } = this.state;
      const clientIndex = clients.findIndex(data => {
        return data.uid == uid;
      });
      clients[clientIndex].name = name;
      clients[clientIndex].cpf = cpf;
      clients[clientIndex].categoria = categoria;
      clients[clientIndex].telefone = telefone;
      this.setState({ clients });
    }
    else if(name && cpf && categoria && telefone){
      const uid = new Date().getTime().toString();
      const { clients } = this.state;
      clients.push({ uid, name, cpf, categoria, telefone });
      this.setState({ clients });
    }

    this.refs.uid.value = '';
    this.refs.name.value = '';
    this.refs.cpf.value = '';
    this.refs.categoria.value = '';
    this.refs.telefone.value = '';
  }

  //remover cliente
  removeData = (client) => {
    const { clients } = this.state;
    const newState = clients.filter(data => {
      return data.uid !== client.uid;
    });
    this.setState({ clients: newState });
  }

  render() {
    const { clients } = this.state;
    return(
      <Container>
        <SecondContainer className='row'>
          <Contact className='col-md-8'>
            <h1 className='text-center'>Seus clientes</h1>
            <p className='text-center'>Nós da Sirius, prezamos pelo sua interação com os clientes!</p>
            <UlClients>
              {
                clients.map(client => 
                  <ul key={client.uid}>
                    <button onClick={ () => this.removeData(client) }><TiDeleteOutline/></button>
                    <li>{ client.name }</li>
                    <li>{ client.cpf }</li>
                    <li>{ client.categoria }</li>
                    <li>{ client.telefone }</li>
                  </ul>
                  )
              }
              
            </UlClients>
          </Contact>
          <AddContact className='col-md-4'>
              <h1>Adicionar Clientes</h1>
            <Form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <input 
                    type='hidden'
                    ref='uid' />
                  <label>Nome:</label>
                  <input 
                    type="text" 
                    className="form-control"  
                    placeholder="Insira o nome do cliente"
                    ref='name'
                  />
                </div>
                <div class="form-group">
                  <label>CPF / CNPJ:</label>
                  <input 
                    type="text" 
                    className="form-control"  
                    placeholder="000.000.000-00"
                    ref='cpf'
                  />
                </div>
                <label>Categoria:</label>
                <select className="form-control" ref='categoria'>
                  <option value='Pessoal'>Cliente Empresarial</option>
                  <option value='Empresarial'>Cliente Pessoal</option>
                </select>
                <div class="form-group mt-3">
                  <label>Telefone:</label>
                  <input 
                    type="text" 
                    className="form-control"  
                    placeholder="(00) 98765-4321"
                    ref='telefone'
                  />
                </div>
                <button type='submit'>Cadastrar Cliente</button>
            </Form>
          </AddContact>
        </SecondContainer>
      </Container>
    )
  }
}
