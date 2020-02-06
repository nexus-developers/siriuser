import React, { Component } from 'react';

import { Container } from '../../styles/Container';
import { SecondContainer ,Contact, AddContact, Form, UlClients } from "./styles.js";

import { TiDeleteOutline } from "react-icons/ti";

export default class Contacts extends Component {
  state = {
    nome: '',
    cpf: '',
    categoria: '',
    telefone: '',
  }

  handleAddName = event => { 
    this.setState({ 
      nome: event.target.value 
    })
  }
  handleAddCpf = event => { this.setState({ cpf: event.target.value }) }
  handleAddCategory = event => { 
    this.setState({ 
      categoria: event.target.value
     }) 
     console.log(this.state.categoria);
   }
  handleAddTel = event => { this.setState({ telefone: event.target.value }) }

  render() {
    return(
      <Container>
        <SecondContainer className='row'>
          <Contact className='col-md-8'>
            <h1 className='text-center'>Seus clientes</h1>
            <p className='text-center'>Nós da Sirius, prezamos pelo sua interação com os clientes!</p>
            <UlClients>
              <ul>
                <button><TiDeleteOutline/></button>
                <li>Geraldo Domingos</li>
                <li>107.191.934-27</li>
                <li>Empresarial</li>
                <li>(81)99245-4451</li>
              </ul>
            </UlClients>
          </Contact>
          <AddContact className='col-md-4'>
              <h1>Adicionar Clientes</h1>
            <Form>
                <div class="form-group">
                  <label>Nome:</label>
                  <input 
                    type="text" 
                    className="form-control"  
                    placeholder="Insira o nome do cliente"
                    value={this.state.nome}
                    onChange={this.handleAddName}
                  />
                </div>
                <div class="form-group">
                  <label>CPF / CNPJ:</label>
                  <input 
                    type="text" 
                    className="form-control"  
                    placeholder="000.000.000-00"
                    value={this.state.cpf}
                    onChange={this.handleAddCpf}
                  />
                </div>
                <label>Categoria:</label>
                <select className="form-control" value={this.state.categoria} onChange={this.handleAddCategory}>
                  <option value='Pessoal'>Cliente Empresarial</option>
                  <option value='Empresarial'>Cliente Pessoal</option>
                </select>
                <div class="form-group mt-3">
                  <label>Telefone:</label>
                  <input 
                    type="text" 
                    className="form-control"  
                    placeholder="(00) 98765-4321"
                    value={this.state.telefone}
                    onChange={this.handleAddTel}
                  />
                </div>
            </Form>
              <button type='submit'>Cadastrar Cliente</button>
          </AddContact>
        </SecondContainer>
      </Container>
    )
  }
}
