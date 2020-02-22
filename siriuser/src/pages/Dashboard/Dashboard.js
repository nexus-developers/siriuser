import React, { Component } from 'react';

import { Container } from '../../styles/Container'
import { Cards, Card, RowCards, CardFull, Divisor, BtnGroup, ChartInformation, Title, InformationCard, Badge } from './styles'

import { GoCheck, GoCalendar } from 'react-icons/go'

import firebase from '../../firebase';

import BarChart from '../../components/Charts/BarChart'

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

    // contador cliente
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
       <Title>
        <GoCheck size={35} color='#6DEA0F'/>
        <h2>DASHBOARD</h2>
       </Title>

        <Cards className='col-12' >
          <RowCards className='row'>
            <Cards className='col-md-4'>
              <Card className='shadow'>
                <header>
                  <h5 className='text-center'>TOTAL DAS PROPOSTAS</h5>
                </header>
                <div>
                  <h1 className='text-center'>
                    {projects.length}
                  </h1>
                </div>
              </Card>
            </Cards>
  
            <Cards className='col-sm-4'>
              <Card className='shadow'>
                <header>
                  <h5 className='text-center'>VALOR TOTAL:</h5>
                </header>
                <div>
                  <p className='text-center'>
                    R$ 123.123.22
                  </p>
                </div>
              </Card>
            </Cards>

            <Cards className='col-sm-4'>
              <Card className='shadow'>
                <header>
                  <h5 className='text-center'>POTÊNCIA TOTAL:</h5>
                </header>
                <div>
                  <p className='text-center'>
                    345.40 kWp
                  </p>
                </div>
              </Card>
            </Cards>
  
          <Cards className='col-sm-12'>
              <CardFull className='shadow'>
                <div>
                  <div>
                    <header>
                      <h5>
                        Histórico de Propostas Emitidas
                      </h5>
                    </header>
                  </div>
                    <Divisor>
                      <select class="custom-select">
                        <option selected>2020</option>
                        <option value="1">2019</option>
                        <option value="2">2018</option>
                        <option value="3">2017</option>
                      </select>

                      <BtnGroup class="btn-group btn-group-sm">
                        <button type="button" class="btn">Ano</button>
                        <button type="button" class="btn">Mês</button>
                      </BtnGroup>
                    </Divisor>
                </div>
              <hr/>
              <ChartInformation>
                <BarChart
                  pessoal={pessoais}
                  empresariais={empresariais}
                />
                <div>
                  <h1 className='text-center'>1</h1>
                  <p className='text-center'>Propostas Emitidas</p>

                  <h1 className='text-center'>R$123.123.22</h1>
                  <p className='text-center'>Valor das Propostas</p>

                  <h1 className='text-center'>123,34 kWp</h1>
                  <p className='text-center'>Potência das Propostas</p>
                </div>
              </ChartInformation>
              </CardFull>
            </Cards>
            
            <Title>
              <GoCheck size={35} color='#6DEA0F'/>
              <h2>NOTÍCIAS</h2>
            </Title>

            <Cards className='col-12' >
              <RowCards className='row'>
                <Cards className='col-md-3'>
                  <InformationCard className='shadow'>
                    <header>
                      <h5 className='text-center'>Que tal financiar seu kit...</h5>
                    </header>
                      <p>
                      s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>

                      <div>
                        <div>
                          <GoCalendar size={20} color='#999999'/>
                          <span>12/12/2020 12:40</span>
                        </div>
                        <div>
                          <Badge class="badge" color='#6DEA0F'>Novo</Badge>
                        </div>
                      </div>
                  </InformationCard>
                </Cards>

                  <Cards className='col-md-3'>
                    <InformationCard className='shadow'>
                      <header>
                        <h5 className='text-center'>TOTAL DAS PROPOSTAS</h5>
                      </header>

                      <p>
                      s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>

                      <div>
                        <div>
                          <GoCalendar size={20} color='#999999'/>
                          <span>12/12/2020 12:40</span>
                        </div>
                        <div>
                          <Badge class="badge" color='#6DEA0F'>Novo</Badge>
                        </div>
                      </div>

                    </InformationCard>
                  </Cards>

                  <Cards className='col-md-3'>
                    <InformationCard className='shadow'>
                      <header>
                        <h5 className='text-center'>TOTAL DAS PROPOSTAS</h5>
                      </header>

                      <p>
                      s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>

                      <div>
                        <div>
                          <GoCalendar size={20} color='#999999'/>
                          <span>12/12/2020 12:40</span>
                        </div>
                        <div>
                          <Badge class="badge" color='#6DEA0F'>Novo</Badge>
                        </div>
                      </div>

                    </InformationCard>
                  </Cards>

                  <Cards className='col-md-3'>
                    <InformationCard className='shadow'>
                      <header>
                        <h5 className='text-center'>TOTAL DAS PROPOSTAS</h5>
                      </header>
                      <p>
                      s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>

                      <div>
                        <div>
                          <GoCalendar size={20} color='#999999'/>
                          <span>12/12/2020 12:40</span>
                        </div>
                        <div>
                          <Badge class="badge" color='#6DEA0F'>Novo</Badge>
                        </div>
                      </div>
                    </InformationCard>
                  </Cards>

              </RowCards>
            </Cards>

          </RowCards>
        </Cards>
      </Container>
    );
  }
}
