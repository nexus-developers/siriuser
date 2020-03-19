import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from '../../styles/Container';
import { SecondContainer ,Contact, UlClients, TableHead, ButtonClients, ButtonAddClients, SearchCamp, Divisor } from "./styles.js";

import { MdDelete, MdPersonAdd, MdSearch } from "react-icons/md";

import firebase from '../../firebase';

import Modal from '../Modals/ContactModal'

class Contacts extends Component {
  state = {
    clients: [],
    projects: [],
    // modal: false,
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

  //remover cliente
  removeData = (client) => {
    const { clients } = this.state;
    const newState = clients.filter(data => {
      return data.uid !== client.uid;
    });
    this.setState({ clients: newState });
  }

  openModal = () => {
    // this.setState({modal: true});
    const { dispatch } = this.props;

    dispatch({
      type: 'MODAL',
      // modal,
    })
  };

  render() {
    const { clients } = this.state;
    const { modalOpen } = this.props;

    return(
      <Container>
        <SecondContainer className='row'>
          <Contact className='col-md-12'>
            <h1 className='text-center'>Seus clientes!</h1>
            <p className='text-center'>Nós da Sirius, prezamos pela sua interação com os clientes.</p>
            <Divisor>
              <ButtonAddClients
                  onClick={() => this.openModal()}
              >
                <MdPersonAdd/>
                <span>Adicionar Clientes</span>
              </ButtonAddClients>
              <SearchCamp>
                  <span>
                    <MdSearch size={20}/>
                  </span>
                <input className='' type='text'/>
              </SearchCamp>
            </Divisor>
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

const mapStateToProps = state => ({
  modalOpen: state.modal
});

export default connect(mapStateToProps)(Contacts);