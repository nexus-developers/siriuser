import React, { Component } from 'react';

import { Container } from '../../styles/Container'
import { InternContainer, InternContainer2, Form, FormPreView } from './styles';

import firebase from '../../firebase'

export default class pages extends Component {
  state = {
    cliente: '',
    etapa: '',
    consumo: '',
    tensao: '',
    kits: '',
    fases: '',
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
    })
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


  render() {
      return (
        <Container className='row'>
          <InternContainer className='col-md-7'>
            <Form>
                  <label>Cliente:</label>
                  <small>Os clientes devem estar cadastrados no sistema.</small>
                  <select className="form-control" onChange={this.cliente}>
                    <option value='Geraldo Domingos'>Geraldo Domingos</option>
                    <option value='Gabriel Almeida'>Gabriel Almeida</option>
                  </select>

                  <label>Etapa de Venda:</label>
                  <small>Etapa de venda Integrador Cliente.</small>
                  <select className="form-control" ref='categoria' onChange={this.etapa}>
                    <option value='Proposta Enviada'>Proposta Enviada</option>
                    <option value='Proposta Negociada'>Proposta Negociada</option>
                  </select>

                  <label>Consumo Mensal: ( kWh )</label>
                  <input 
                    type='text' 
                    className='form-control'
                    placeholder='150'
                    value={this.state.consumo}
                    onChange={this.consumo}
                  />

                  <label>Tensão:</label>
                  <select className="form-control" ref='categoria' onChange={this.tensao}>
                    <option value='127 / 220'>127 / 220</option>
                    <option value='127 / 220'>127 / 220</option>
                  </select>

                  <label>Kits:</label>
                  <select className="form-control" ref='categoria' onChange={this.kits}>
                    <option value='Kit1'>KIT 1</option>
                    <option value='Kit2'>KIT 2</option>
                    <option value='kit3'>KIT 3</option>
                    <option value='kit4'>KIT 4</option>
                  </select>

                  <label>Fases:</label>
                  <select className="form-control" ref='categoria' onChange={this.fases}>
                    <option value='Bifásico'>Bifásico</option>
                    <option value='Bifásico'>Bifásico</option>
                  </select>

                  <button type='submit'>Criar Projeto</button>

            </Form>
          </InternContainer>

          <InternContainer2 className='col-md-4'>
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
            </FormPreView>
          </InternContainer2>
        </Container>
    );
  }
}

