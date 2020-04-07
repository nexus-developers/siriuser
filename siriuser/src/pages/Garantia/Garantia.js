import React, { Component } from 'react';

import { Container } from '../../styles/Container';

import {
    Title, 
    AreaInput,
} from './styles'

export default class Garantia extends Component {
  render() {
      return(
        <Container style={{display: 'flex', justifyContent: 'flex-start' }}>
            <Title>Sirius Garantia!</Title>
            <AreaInput>
                <div>
                    <h5>Informe o Código do Produto:</h5>
                    <small>Todos os nossos produtos, recebem um código único!</small>
                    <input 
                        className='form-control'
                        placeholder='xxx.xxx.xxx.xxx.xxx'
                    />
                    <button className='btn btn-success'>Enviar solicitação</button>
                </div>
                <div>
                <h5>Alguma dúvida ou problema?</h5>
                    <small>Digite o seu e-mail abaixo que entraremos em contato com você</small>
                    <input 
                        className='form-control'
                        placeholder='user@corp.com'
                    />
                    <button className='btn btn-success'>Enviar</button>
                </div>
            </AreaInput>
        </Container>
      )
  }
}
