import React, { Component } from 'react';

import { Container } from '../../styles/Container'
import { Cards, ProjectHistory, Card, CardBody, CardTitle, CardText, RowCards, CardFull } from './styles'

import firebase from '../../firebase';

export default class pages extends Component {
  state = {
    projects: [],
    clients: [],
  }

  //requisetar projetos
  getUserData = () =>{
    const ref = firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  }

  componentDidMount(){
    this.getUserData();
  }

  componentDidUpdate(_,prevState){
    const { projects, clients } = this.state;

    if(prevState.projects !== projects){
      localStorage.setItem('projects', JSON.stringify(projects));
    }

    if(prevState.clients !== clients){
      localStorage.setItem('clients', JSON.stringify(clients));
    }
  }


  render() {
    const { projects, clients } = this.state;

    //contador proposta
    let aprovado = 0;
    let rejeitado = 0;
    projects.forEach(contador);
    function contador(item){
      if(item.etapa === "Proposta Negociada"){
        aprovado++;
      }
      else{
        rejeitado++;
      }
    }

    //contador cliente
    let pessoais = 0;
    let empresariais = 0;
    clients.forEach(clientes);
    function clientes(item){
      if(item.categoria === "Pessoal"){
        pessoais++;
      }
      else{
        empresariais++;
      }
    }

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
                  <CardText className='card-text text-center'>{projects.length} projetos criados</CardText>
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
                          <CardText className='card-text text-center'>Clientes Pessoais: { pessoais } Clientes.</CardText>
                        </li>
                        <li>
                        <CardText className='card-text text-center'>Clientes Empresariais: { empresariais } Clientes.</CardText>
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
                  <CardText className='card-text text-center'> { aprovado } Projetos Aprovados</CardText>
                </CardBody>
              </Card>
            </Cards>
  
            <Cards className='col-sm-6'>
              <Card className='card shadow bg-danger text-white'>
                  <CardTitle className='card-header text-center'>
                    Projetos Reprovados
                  </CardTitle>
                  <CardBody className='card-body'>
                  <CardText className='card-text text-center'>{ rejeitado } Projetos Rejeitados</CardText>
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
                      {
                        projects.map(project =>
                          <ul key={project.uid}>
                            <li>{ project.client }</li>
                            <li>{ project.etapa }</li>
                            <li>{ project.consumo } kWh</li>
                            <li>{ project.tensao }</li>
                            <li>{ project.kit }</li>
                            <li>{ project.fase }</li>
                          </ul>
                          )
                      }
                      
                    </CardBody>
              </CardFull>
            </Cards>
          </RowCards>
        </ProjectHistory>
      </Container>
    );
  }
}
