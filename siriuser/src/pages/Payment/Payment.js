import React, { Component } from 'react';

import { Container } from '../../styles/Container'

import firebase from '../../firebase'

import { Table, Total, ContentInformation, Content } from './styles';

export default class Personalizado extends Component {
    render(){
        return (
            <Container>
                <Table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Preço Unitário</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">123123</th>
                            <td scope="row">Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                            <td scope="row">R$ 800,00</td>
                            <td scope="row">19</td>
                            <td scope="row">R$ 15,200</td>
                        </tr>
                        <tr>
                            <th scope="row">123123</th>
                            <td scope="row">Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                            <td scope="row">R$ 800,00</td>
                            <td scope="row">19</td>
                            <td scope="row">R$ 15,200</td>
                        </tr>
                        <tr>
                            <th scope="row">123123</th>
                            <td scope="row">Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                            <td scope="row">R$ 800,00</td>
                            <td scope="row">19</td>
                            <td scope="row">R$ 15,200</td>
                        </tr>
                        <tr>
                            <th scope="row">123123</th>
                            <td scope="row">Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                            <td scope="row">R$ 800,00</td>
                            <td scope="row">19</td>
                            <td scope="row">R$ 15,200</td>
                        </tr>
                        <tr>
                            <th scope="row">123123</th>
                            <td scope="row">Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                            <td scope="row">R$ 800,00</td>
                            <td scope="row">19</td>
                            <td scope="row">R$ 15,200</td>
                        </tr>
                        <tr>
                            <th scope="row">123123</th>
                            <td scope="row">Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                            <td scope="row">R$ 800,00</td>
                            <td scope="row">19</td>
                            <td scope="row">R$ 15,200</td>
                        </tr>
                        <tr>
                            <th scope="row">123123</th>
                            <td scope="row">Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                            <td scope="row">R$ 800,00</td>
                            <td scope="row">19</td>
                            <td scope="row">R$ 15,200</td>
                        </tr>
                    </tbody>
                    </Table>
                    <Total>Total: R$ 106.400</Total>
                    
                    <ContentInformation>
                        <form>
                            <h5>Frete</h5>
                            <hr />
                            <Content>
                                <div>
                                    <label>Digite CEP:</label>
                                    <input 
                                        className='form-control'
                                        placeholder='Digite seu CEP'
                                    />
                                </div>
                                <div>
                                    <button>Calcular Frete</button>
                                </div>
                            </Content>
                            
                            <h5>Gerar Documento</h5>
                            <hr />
                            <Content>
                                <div>
                                    <label>Gerar Orçamento</label>
                                    <button>Gerar orçamento</button>
                                </div>
                            </Content>
                        </form>
                    </ContentInformation>
            </Container>
        )
    }
}
