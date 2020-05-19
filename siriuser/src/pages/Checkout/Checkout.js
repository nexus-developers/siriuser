import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import { Container } from '../../styles/Container'


import {
  ButtonAlter,
  ButtonSimple,
  Card,
  ContainerAddress,
  ContainerFlex,
  ContainerFlexDivHalf,
  ContainerFlexDivMedium,
  ContainerFlexSpace,
  ContainerInputAuto,
  ContainerSelect,
  ContainerTable,
  ContainerTextArea,
  Form,
  HR1,
  HR2,
  InternContainer,
  LastSelect,
  NavigationButton,
  NavigationRoute,
  RouteName,
  TextSimple,
  Title,
  TopNavigation,
} from './styles';

class pages extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <Container className=''>

        <TopNavigation>

          <NavigationRoute style={{ marginLeft: '100px' }} >
            <RouteName active>DIMENSIONAMENTO</RouteName>
            <NavigationButton active />
          </NavigationRoute>

          <HR1 />

          <NavigationRoute>
            <RouteName>ANÁLISE FINANCEIRA</RouteName>
            <Link onClick={() => this.openAnalise()} to='/payment'>
              < NavigationButton />
            </Link>
          </NavigationRoute>

          <HR2 />

          <NavigationRoute style={{ marginRight: '165px' }} >
            <RouteName>PROPOSTA</RouteName>
            <NavigationButton />
          </NavigationRoute>

        </TopNavigation>


        <InternContainer>
          <Form onSubmit={this.handleSubmit}>
            <input
              type='hidden'
              ref='uid' />
            <Title>Dados da Entrega</Title>
            <ContainerFlex>
              <ContainerFlexDivHalf>
                <ContainerFlex>
                  <ContainerSelect>
                    <label>Endereço</label>
                    <select className="form-control" ref='categoria' onChange={this.etapa}>
                      <option disabled value selected>Endereço de Entrega</option>
                      <option value='Proposta Enviada'>Proposta Emitida</option>
                      <option value='Proposta Apresentada'>Proposta Apresentada</option>
                      <option value='Negociação'>Negociação</option>
                      <option value='Projeto Cancelado'>Projeto Cancelado</option>
                      <option value='Projeto Vendido'>Projeto Vendido</option>
                    </select>
                  </ContainerSelect>

                  <ContainerSelect>
                    <LastSelect>

                      <label>Local</label>
                      <select className="form-control" ref='categoria' onChange={this.etapa}>
                        <option disabled value selected>Local</option>
                        <option value='Casa'>Casa</option>
                        <option value='Apartamento'>Apartamento</option>
                        <option value='Sítio'>Sítio</option>
                      </select>
                    </LastSelect>
                  </ContainerSelect>

                </ContainerFlex>
                <ContainerTextArea>
                  <textarea cols="4" rows="4"></textarea>
                </ContainerTextArea>
              </ContainerFlexDivHalf>



              <ContainerFlexDivHalf>
                <div style={{ marginLeft: '30px' }}>
                  <ContainerAddress>
                    <h3>Rua Teste de Oliveira, 11000</h3>
                    <h5>CEP: 13420 - 310</h5>
                    <h6>Recife, Pernambuco - BR</h6>

                  </ContainerAddress>
                  <ButtonAlter className='shadow'>
                    <span>Alterar</span>
                  </ButtonAlter>
                </div>

              </ContainerFlexDivHalf>
            </ContainerFlex>


            <Title>Pagamento</Title>
            <ContainerFlexSpace>
              <ContainerFlexDivMedium>
                <Card>
                  <ContainerTable>
                    <tbody>
                      <tr>
                        <td>
                          <label>Descrição</label>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <label>Valor</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextSimple>Gerador Fotovoltático</TextSimple>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <TextSimple>R$134.844,61</TextSimple>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextSimple>Frete</TextSimple>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <TextSimple>R$ 8.090,68</TextSimple>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <TextSimple>Seguro</TextSimple>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <TextSimple>R$ 0,00</TextSimple>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <label style={{ marginTop: '20px' }}><strong>Valor Total: </strong> R$140.815,63</label>
                        </td>
                      </tr>
                    </tbody>
                  </ContainerTable>
                </Card>
              </ContainerFlexDivMedium>

              <ContainerFlexDivMedium>
                <Card>
                  <label>Cupom de Desconto</label>
                  <ContainerInputAuto>
                    <input className='form-control' type='number' ref='cupom' />
                  </ContainerInputAuto>

                  <ButtonAlter className='shadow'>
                    <span>Alterar</span>
                  </ButtonAlter>
                </Card>
              </ContainerFlexDivMedium>


              <ContainerFlexDivMedium>
                <Card>
                  <label>Escolha uma forma de Pagamento</label>
                  <ContainerInputAuto>
                    <input className='form-control' type='number' ref='pagamento' />
                  </ContainerInputAuto>

                  <ContainerFlex>
                    <Link to='/checkout/finished' style={{ textDecoration: 'none' }}>
                      <ButtonAlter className='shadow'>
                        <span>Finalizar Orçamento</span>
                      </ButtonAlter>
                    </Link>
                    <ButtonSimple>Salvar</ButtonSimple>

                  </ContainerFlex>
                </Card>
              </ContainerFlexDivMedium>

            </ContainerFlexSpace>

          </Form>
        </InternContainer>

      </Container>
    );
  }
}

export default connect()(pages);