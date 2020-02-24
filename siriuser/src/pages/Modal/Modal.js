import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import firebase from '../../firebase';

// Global Container
import { Container } from '../../styles/Container';

import { ModalContainer, InternContainer, Form } from './styles'

import { AiOutlineClose } from 'react-icons/ai'

import Logo from '../../styles/GlobalAssets/logo.png'

export default class Modal extends Component {
    state = {
        closeModal: true,
        clients: [],
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
    
        this.writeUserData();
    
        this.refs.uid.value = '';
        this.refs.name.value = '';
        this.refs.cpf.value = '';
        this.refs.categoria.value = '';
        this.refs.telefone.value = '';
      }

    closeModalButton = () => {
        this.setState({
            closeModal: false
        })
    }
    
  render() {

    const { closeModal } = this.state 

    return (
        <>
            {
                closeModal ? (
                    <Container>
                        <ModalContainer>
                        <InternContainer>
                            <header>
                                <img src={Logo} alt='Sirius Plataforma'/>

                                <Link to='/contacts' refresh='true'>
                                    <button
                                        onClick={() => this.closeModalButton()}
                                    >
                                        <AiOutlineClose size={25}/>
                                    </button>
                                </Link>
                            </header>
                                <hr/>
                            <Form onSubmit={this.handleSubmit}>
                                    <input 
                                        type='hidden'
                                        ref='uid' 
                                    />

                                    <label>Nome*:</label>
                                    <input
                                        type="text"
                                        ref='name'
                                    />

                                    <label>Email*:</label>
                                    <input
                                        type="text"
                                        ref='email'

                                    />

                                    <label>Telefone:</label>
                                    <input
                                        type="text"
                                        ref='telefone'
                                    />

                                    <label>CPF/CNPJ*:</label>
                                    <input
                                        type="text"
                                        ref='cpf'
                                    />

                                    <label>Categoria:</label>
                                    <select className="form-control" ref='categoria'>
                                        <option value='Pessoal'>Cliente Empresarial</option>
                                        <option value='Empresarial'>Cliente Pessoal</option>
                                    </select>

                                    <button type='submit'>Cadastrar Cliente</button>
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
