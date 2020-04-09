import React, { Component } from 'react';

import { Container } from '../../styles/Container'

import { Link } from 'react-router-dom'

import { Table, Total, ContentInformation, Content, TopNavigation, NavigationRoute, RouteName, NavigationButton, HR1, HR2, Title, FreteResult, ButtonGreen } from './styles';

export default class Personalizado extends Component {
    render(){
        return (
            <Container>
                <TopNavigation>

                    <NavigationRoute style={{ marginLeft: '100px' }} >
                        <RouteName >DIMENSIONAMENTO</RouteName>
                    <Link to='/projects/personalizado'>
                        <NavigationButton active />
                    </Link>
                    </NavigationRoute>

                    <HR1/>

                <NavigationRoute>
                    <RouteName active>ANÁLISE FINANCEIRA</RouteName>
                    <Link to='/payment'>
                        < NavigationButton active />
                    </Link>
                </NavigationRoute>

                <HR2/>

                <NavigationRoute style={{ marginRight: '165px'}} >
                    <RouteName>PROPOSTA</RouteName>
                    <NavigationButton />
                </NavigationRoute>

                </TopNavigation>
                
                <div className='shadow' style={{ width: '95%', borderRadius: '4px' }}>
                    <Table className='table' >
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
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                            <tr>
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                            <tr>
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                            <tr>
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                            <tr>
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                            <tr>
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                            <tr>
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                            <tr>
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                            <tr>
                                <td>123123</td>
                                <td >Modulo Fotovoltaico SIRIUS 375Wp - 72 células - monocristalino - grafeno</td>
                                <td style={{ color: '#989898'}}>R$ 800,00</td>
                                <td style={{ color: '#989898'}}>19</td>
                                <td style={{ color: '#989898'}}>R$ 15,200</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
                        <Total>Total: R$ 106.400</Total>
                        <ButtonGreen>
                            Editar itens
                        </ButtonGreen>
                    </div>

                    <Title>Frete</Title>
                    <ContentInformation  >
                      <div>
                        <Content className='shadow'>
                            <label>Digite o Cep:</label>
                            <input  className='form-control'/>
                        </Content>
                        <Content className='shadow'>
                            <label>Opções de Entrega:</label>
                            <select className='form-control'>
                                <option></option>
                                <option>Opção1</option>
                                <option>Opção2</option>
                                <option>Opção3</option>
                                <option>Opção4</option>
                            </select>
                        </Content>
                      </div>
                        <FreteResult className='shadow'>
                            <label>Valor do Frete</label>
                            <h1>R$ 0,00</h1>
                        </FreteResult>
                    </ContentInformation>
                    <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                        <ButtonGreen >
                            Calcular
                        </ButtonGreen>
                    </div>


                    <Title>Meus Itens</Title>
                    <ContentInformation style={{ width: '95%'}}>
                        <div>
                        <select className='form-control' style={{ width: '330px'}}>
                                <option>Adicionar Itens</option>
                                <option>Opção1</option>
                                <option>Opção2</option>
                                <option>Opção3</option>
                                <option>Opção4</option>
                            </select>
                        </div>

                        <div>
                            <select className='form-control' style={{ width: '330px'}}>
                                <option>Nenhum Item para Adicionar</option>
                                <option>Opção1</option>
                                <option>Opção2</option>
                                <option>Opção3</option>
                                <option>Opção4</option>
                            </select>
                        </div>

                        <div>
                           <input className='form-control' style={{ width: '150px', marginBottom: '20px'}} type='number' placeholder='Quantidade'/>
                        </div>

                        <div>
                            <ButtonGreen >
                                Salvar
                            </ButtonGreen>
                        </div>
                    </ContentInformation>
                    <div style={{ width: '95%'}}>
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col" style={{ color: '#65E213', fontWeight: 'bold' }}>Tipo</th>
                                <th scope="col" style={{ color: '#65E213', fontWeight: 'bold' }}>Descrição</th>
                                <th scope="col" style={{ color: '#65E213', fontWeight: 'bold' }}>Custo Unitário</th>
                                <th scope="col" style={{ color: '#65E213', fontWeight: 'bold' }}>Preço Unitário</th>
                                <th scope="col" style={{ color: '#65E213', fontWeight: 'bold' }}>Quantidade</th>
                                <th scope="col" style={{ color: '#65E213', fontWeight: 'bold' }}>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th><span class="badge badge-primary">Serviço</span></th>
                                <td style={{ color: '#989898'}}>Consulta</td>
                                <td style={{ color: '#989898'}}>R$ 300,00</td>
                                <td style={{ color: '#989898'}}>R$ 300,00</td>
                                <td style={{ color: '#989898'}}>3</td>
                                <td style={{ color: '#989898'}}>R$ 900,00</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <Total>Total: R$ 106.400</Total>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '95%', marginBottom: '20px' }}>
                        <ButtonGreen >
                                Gerar Orçamento
                        </ButtonGreen>
                    </div>
            </Container>
        )
    }
}
