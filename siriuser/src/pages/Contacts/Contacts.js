import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Container } from '../../styles/Container';

import { SecondContainer, Contact, UlClients, ButtonAddClients, SearchCamp, Divisor, Filter, CardClient } from "./styles.js";

import { MdDelete } from "react-icons/md";

import { FaUserEdit } from 'react-icons/fa'

import { FiPlus } from 'react-icons/fi'

import firebase from '../../firebase';

import Modal from '../Modals/ContactModal'

class Contacts extends Component {
  state = {
    clients: [],
    projects: [],
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
            <h1>Seus clientes!</h1>
            <p>Nós da Sirius, prezamos pela sua interação com os clientes.</p>
            <Divisor>
              <ButtonAddClients
                  onClick={() => this.openModal()}
              >
                <FiPlus color='#FFF' size={25} />
                <span>Novo Cliente</span>
              </ButtonAddClients>
              <Filter>
                <p>Filtro:</p>
                <select class="form-control">
                  <option></option>
                  <option>
                    Pessoal
                  </option>
                  <option>
                    Empresarial
                  </option>
                </select>
              </Filter>
              <SearchCamp>
                <input className='form-control' type='text' placeholder='Pesquisar Cliente'/>
                <button className='btn btn-success'>Buscar</button>
              </SearchCamp>
            </Divisor>
            <UlClients>

               {
                 clients.map(client => (
                    <CardClient className='shadow' key={client.id}>
                      <div style={{marginLeft: '20px'}}>
                        <h5>Nome:</h5>
                        <p>{client.name}</p>
                      </div>
                      <div>
                        <h5>CPF/CNPJ</h5>
                        <p>{client.cpf}</p>
                      </div>
                      <div>
                        <h5>Telefone</h5>
                        <p>{client.telefone}</p>
                      </div>
                      <div>
                        <h5>Catêgoria</h5>
                        <p>{client.categoria}</p>
                      </div>
                    <div>
                      <button>
                        <FaUserEdit color='#BCBCBC' size={30}/>
                      </button>
                    </div>
                    <div>
                      <button style={{ marginRight: '20px' }}
                        onClick={() => this.removeData(client)}  
                      >
                        <MdDelete color='#ff0000' size={30} />
                      </button>
                    </div>
                  </CardClient>
                 ))
               }
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