import React from 'react';

import { Container } from '../../styles/Container'
import { Cards, ProjectHistory, Card, CardBody, CardTitle, CardText, RowCards, CardFull } from './styles'

export default function pages() {
  return (
    <Container className='row'>
      <Cards className='col-md-5' >
        <RowCards className='row'>
          <Cards className='col-sm-6'>
            <Card className='card shadow bg-light'>
                <CardTitle className='card-header text-center'>
                  Projetos Criados
                </CardTitle>
                <CardBody className='card-body'>
                <CardText className='card-text text-center'>4 projetos criados</CardText>
              </CardBody>
            </Card>
          </Cards>

          <Cards className='col-sm-6'>
            <Card className='card shadow bg-light'>
                <CardTitle className='card-header text-center'>
                  Valor Total das Propostas
                </CardTitle>
                <CardBody className='card-body'>
                <CardText className='card-text text-center'>R$ 123.231.21</CardText>
              </CardBody>
            </Card>
          </Cards>


        <Cards className='col-sm-12'>
          <CardFull className='card shadow bg light'>
                  <CardTitle className='card-header text-center'>
                    Tipos de Clientes
                  </CardTitle>
                  <CardBody className='card-body'>
                    <ul>
                      <li>
                        <CardText className='card-text text-center'>Clientes Pessoais: 4 Clientes.</CardText>
                      </li>
                      <li>
                      <CardText className='card-text text-center'>Clientes Empresariais: 4 Clientes.</CardText>
                      </li>
                    </ul>
                  
                  </CardBody>
            </CardFull>
          </Cards>


          <Cards className='col-sm-6'>
            <Card className='card shadow bg-success text-white'>
                <CardTitle className='card-header text-center'>
                  Projetos Aprovados
                </CardTitle>
                <CardBody className='card-body'>
                <CardText className='card-text text-center'>8 Projetos Aprovados</CardText>
              </CardBody>
            </Card>
          </Cards>

          <Cards className='col-sm-6'>
            <Card className='card shadow bg-danger text-white'>
                <CardTitle className='card-header text-center'>
                  Projetos Reprovados
                </CardTitle>
                <CardBody className='card-body'>
                <CardText className='card-text text-center'>3 Projetos Rejeitados</CardText>
              </CardBody>
            </Card>
          </Cards>
        </RowCards>
      </Cards>

      
      <ProjectHistory className='col-md-7'>
        <RowCards>
        <Cards className='col-sm-12'>
          <CardFull className='card shadow bg light'>
                  <CardTitle className='card-header text-center'>
                    Histórico de Projetos
                  </CardTitle>
                  <CardBody className='card-body'>
                    <ul>
                     <li>Geraldo Domingos</li>
                     <li>Proposta Enviada</li>
                     <li>800 kWh</li>
                     <li>127 / 220</li>
                     <li>Kit 4</li>
                     <li>Bifásico</li>
                    </ul>

                    <ul>
                     <li>Geraldo Domingos</li>
                     <li>Proposta Enviada</li>
                     <li>800 kWh</li>
                     <li>127 / 220</li>
                     <li>Kit 4</li>
                     <li>Bifásico</li>
                    </ul>

                    <ul>
                     <li>Geraldo Domingos</li>
                     <li>Proposta Enviada</li>
                     <li>800 kWh</li>
                     <li>127 / 220</li>
                     <li>Kit 4</li>
                     <li>Bifásico</li>
                    </ul>

                    <ul>
                     <li>Geraldo Domingos</li>
                     <li>Proposta Enviada</li>
                     <li>800 kWh</li>
                     <li>127 / 220</li>
                     <li>Kit 4</li>
                     <li>Bifásico</li>
                    </ul>
                  
                  </CardBody>
            </CardFull>
          </Cards>
        </RowCards>
      </ProjectHistory>
    </Container>
  );
}





