import React, { Component } from 'react';

import { Table,  TableRow } from './styles';

import { Container } from '../../styles/Container'

export default class Negocios extends Component {
  render() {
      return(
        <Container>
            <Table className='table'>
                <thead>
                    <TableRow>
                        <th scope='col'>
                            <h5 className='text-center'>Proposta Emitida</h5>
                            <p  className='text-center'>R$ 123.123.12
                                <span  className='text-center'>(10 Negócios)</span>
                            </p>
                        </th>
                        <th scope='col'>
                            <h5 className='text-center'>Proposta Apresentada</h5>
                            <p  className='text-center'>R$ 123.123.12
                                <span  className='text-center'>(10 Negócios)</span>
                            </p>
                        </th>
                        <th scope='col'>
                            <h5 className='text-center'>Negociação</h5>
                            <p  className='text-center'>R$ 123.123.12
                                <span  className='text-center'>(10 Negócios)</span>
                            </p>
                        </th>
                        <th scope='col'>
                            <h5 className='text-center'>Projeto Vendido</h5>
                            <p  className='text-center'>R$ 123.123.12
                                <span  className='text-center'>(10 Negócios)</span>
                            </p>
                        </th>
                        <th scope='col'>
                            <h5 className='text-center'>Projeto Cancelado</h5>
                            <p  className='text-center'>R$ 123.123.12
                                <span  className='text-center'>(10 Negócios)</span>
                            </p>
                        </th>
                    </TableRow>
                </thead>
            </Table>
        </Container>
      )
  }
}
