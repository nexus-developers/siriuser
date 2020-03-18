import React, { Component } from 'react';

import { Container } from '../../styles/Container';

import {
    Title, 
    AreaInput,
} from './styles'

export default class Garantia extends Component {
  render() {
      return(
        <Container style={{display: 'flex', justifyContent: 'center' }}>
            <AreaInput className='shadow'>
            <Title>Sirius Garantia!</Title>
                <hr/>
                <h5>Informe o Código do Produto:</h5>
                <small>Todos os nossos produtos, recebem um código único!</small>
                <input 
                    className='form-control'
                    placeholder='123.123.123.123.123'
                />
                <button className='btn btn-success'>Enviar solicitação</button>
            </AreaInput>
        </Container>
      )
  }
}
