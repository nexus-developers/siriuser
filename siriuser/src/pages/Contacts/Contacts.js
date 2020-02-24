import React, { Component } from 'react';

import { Container } from '../../styles/Container';
import { SecondContainer ,Contact, UlClients, TableHead, ButtonClients, ButtonAddClients } from "./styles.js";

import { MdDelete, MdPersonAdd } from "react-icons/md";

import firebase from '../../firebase';

import Modal from '../Modal/Modal'

export default class Contacts extends Component {
  state = {
    clients: [],
    projects: [],
    modalOpen: false,
  }

  // gravar firebase
  writeUserData = () => {
    const { clients } = this.state;
    firebase.database().ref('/').set(this.state);
    
    localStorage.setItem('clients', JSON.stringify(clients));
  }

  //requisição firebase
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
  
  componentDidMount() {
    this.getUserData();
  }

  // componentDidUpdate(_,prevState){
  //   if(this.state !== prevState){
  //     this.writeUserData();
  //   }
  // }
  
  // handleSubmit = e => {
  //   e.preventDefault();

  //   const uid = this.refs.uid.value;
  //   const name = this.refs.name.value;
  //   const cpf = this.refs.cpf.value;
  //   const categoria = this.refs.categoria.value;
  //   const telefone = this.refs.telefone.value;

  //   if(uid && name && cpf && categoria && telefone){
  //     const { clients } = this.state;
  //     const clientIndex = clients.findIndex(data => {
  //       return data.uid == uid;
  //     });
  //     clients[clientIndex].name = name;
  //     clients[clientIndex].cpf = cpf;
  //     clients[clientIndex].categoria = categoria;
  //     clients[clientIndex].telefone = telefone;
  //     this.setState({ clients });
  //   }
  //   else if(name && cpf && categoria && telefone){
  //     const uid = new Date().getTime().toString();
  //     const { clients } = this.state;
  //     clients.push({ uid, name, cpf, categoria, telefone });
  //     this.setState({ clients });
  //   }

  //   this.writeUserData();

  //   this.refs.uid.value = '';
  //   this.refs.name.value = '';
  //   this.refs.cpf.value = '';
  //   this.refs.categoria.value = '';
  //   this.refs.telefone.value = '';
  // }

  //remover cliente
  removeData = (client) => {
    const { clients } = this.state;
    const newState = clients.filter(data => {
      return data.uid !== client.uid;
    });
    this.setState({ clients: newState });
  }

  openModal(){
    this.setState({
      modalOpen: true
    })
  }

  render() {
    const { clients,  modalOpen } = this.state;
    return(
      <Container>
        <SecondContainer className='row'>
          <Contact className='col-md-12'>
            <h1 className='text-center'>Seus clientes!</h1>
            <p className='text-center'>Nós da Sirius, prezamos pelo sua interação com os clientes.</p>
            <ButtonAddClients
                onClick={() => this.openModal()}
            >
              <MdPersonAdd/>
              <span>Adicionar Clientes</span>
            </ButtonAddClients>
            <UlClients>
            <table class="table">
              <TableHead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">NOME</th>
                  <th scope="col">CPF/CNPJ</th>
                  <th scope="col">CATEGORIA</th>
                  <th scope="col">TELEFONE</th>
                  <th scope="col"></th>
                </tr>
              </TableHead>
              <tbody>
                  {
                    clients.map(client =>  (
                      <tr key={client.id} >
                        <td>{ client.id }</td>
                        <td>{ client.name }</td>
                        <td>{ client.cpf }</td>
                        <td>{ client.categoria }</td>
                        <td>{ client.telefone }</td>
                        <td>
                          <ButtonClients onClick={ () => this.removeData(client) }>
                            <MdDelete size={25} color='#FF0000'/>
                          </ButtonClients>
                        </td>
                      </tr>
                    ))
                  }
              </tbody>
              </table>
            </UlClients>
          </Contact>
        </SecondContainer>
          {
            modalOpen ? (
              <>
                <Modal/>
              </>
            ) : (
              null
            )
          }
      </Container>
    )
  }
}
