import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import firebase from '../../firebase';

// Global Container
import { Container } from '../../styles/Container';

import { ModalContainer, InternContainer, Form, FormDiv, Green1, Green2, ButtonsDiv, Cancel, MapsDiv, Register } from './styles'

import { AiOutlineClose } from 'react-icons/ai'

import Maps from '../../components/Map/Map'

class Modal extends Component {
    state = {
        clients: [],
        projects: [],
    }

    writeUserData = () => {
        const { clients } = this.state;
        firebase.database().ref('/').set(this.state);
        
        localStorage.setItem('clients', JSON.stringify(clients));
    }

    componentDidUpdate(_,prevState){
        if(this.state !== prevState){
          this.writeUserData();
        }
    }

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
            return data.uid === uid;
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
    
        this.writeUserData();
    
        this.refs.uid.value = '';
        this.refs.name.value = '';
        this.refs.cpf.value = '';
        this.refs.categoria.value = '';
        this.refs.telefone.value = '';
      }

      closeModal = () => {
        // this.setState({modalClose: false});
        const { dispatch } = this.props;
    
        dispatch({
          type: 'MODAL_CLOSE',
        })
      };
    
  render() {

    const { modalClose } = this.props 

    return (
        <>
            {
                modalClose ? (
                    <Container>
                        <ModalContainer >
                        <InternContainer className='shadow'>
                            <header>
                                <div>
                                    <h5>Novo Cliente</h5>
                                    <div>
                                        <Green1/>
                                        <Green2/>
                                    </div>

                                </div>


                                <Link to='/contacts' refresh='true'>
                                    <button
                                        onClick={() => this.closeModal()}
                                    >
                                        <AiOutlineClose size={25}/>
                                    </button>
                                </Link>
                            </header>
                            <Form onSubmit={this.handleSubmit}>
                                    <input 
                                        type='hidden'
                                        ref='uid' 
                                    />

                                <FormDiv>
                                    <div>
                                        <label>Nome do Cliente:</label>
                                        <input
                                            type="text"
                                            ref='name'
                                        />
                                    </div>
                                    
                                    <div>
                                        <label>Email:</label>
                                        <input
                                            type="text"
                                            ref='email'

                                        />
                                    </div>
                                </FormDiv>

                                <FormDiv>
                                    <div>
                                        <label>CPF/CNPJ*:</label>
                                        <input
                                            type="text"
                                            ref='cpf'
                                            style={{ width:'300px' }}
                                        />
                                    </div>

                                    <div>
                                        <label>Categoria:</label>
                                        <select className="form-control" ref='categoria' style={{ width:'250px' }} >
                                            <option value='Pessoal'>Cliente Empresarial</option>
                                            <option value='Empresarial'>Cliente Pessoal</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label>Telefone:</label>
                                        <input
                                            type="text"
                                            ref='telefone'
                                            style={{ width:'300px' }}
                                        />
                                    </div>

                                </FormDiv>

                                <MapsDiv>
                                    <Maps 
                                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAB-xvZm8wx8Doshepy284rjII_U2zZkfs&libraries=places`} 
                                        loadingElement={<div style={{ height: `100%` }} />} 
                                        containerElement={<div style={{ height: `300px`}} />}
                                        mapElement={<div style={{ height: `90%`, borderRadius: 8 }} />}
                                    />
                                </MapsDiv>

                                <ButtonsDiv
                                    onClick={() => this.closeModal()}
                                >
                                    <Cancel className='btn btn-light'>Cancelar</Cancel>
                                    <Register type='submit'>Cadastrar Cliente</Register>
                                </ButtonsDiv>
                            </Form>
                        </InternContainer>
                        </ModalContainer>
                    </Container>
                ) : (
                    null
                )
            }
        </>
    );
  }
}

const mapStateToProps = state => ({
    modalClose: state.modal
});

export default connect(mapStateToProps)(Modal);