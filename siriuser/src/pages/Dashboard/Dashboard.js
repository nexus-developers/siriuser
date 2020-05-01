import React, { Component } from 'react';

import { Container } from '../../styles/Container'

import { 
  Card, 
  RowCards, 
  CardFull, 
  Divisor, 
  BtnGroup, 
  ChartInformation, 
  Title, 
  CardContainer, 
  CircleProgress, 
  CircleContainer,
  CircleText,
  NoticiesCards,
  NoticiesCard
} from './styles'

import './styles.css'

import { GoCalendar } from 'react-icons/go'

import firebase from '../../firebase';

import BarChart from '../../components/Charts/BarChart'

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
    
    var aprovado = 0;
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
      <Container>
       <Title style={{ marginLeft: '20px'  }}>Dashboard</Title>

        <CardContainer>
          <RowCards>
              <Card className='shadow linear-gradient' style={{ marginLeft: '-26px' }}>
                <header>
                  <h5 className='text-center'>TOTAL DE PROPOSTAS</h5>
                </header>
                <div>
                  <h1 className='text-center'>
                    {projects.length}
                  </h1>
                </div>
              </Card>
              <Card className='linear-gradient shadow'>
                <header>
                  <h5 className='text-center'>VALOR TOTAL:</h5>
                </header>
                <div>
                  <p className='text-center'>
                    R$ 123.123.22
                  </p>
                </div>
              </Card>

              <Card className='linear-gradient shadow'>
                <header>
                  <h5 className='text-center'>POTÊNCIA TOTAL:</h5>
                </header>
                <div>
                  <p className='text-center'>
                    345.40 kWp
                  </p>
                </div>
              </Card>
        </RowCards>
      </CardContainer>
          
          <CardContainer style={{ marginLeft: '20px' }}>
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
                      <select class="custom-select" style={{ width: '300px' }}>
                        <option selected>2020</option>
                        <option value="1">2019</option>
                        <option value="2">2018</option>
                        <option value="3">2017</option>
                      </select>

                      <BtnGroup class="btn-group btn-group-sm">
                        <button type="button" className="btn mr-2">Ano</button>
                        <button type="button" className="btn">Mês</button>
                      </BtnGroup>
                    </Divisor>
                </div>
              <hr/>
              <ChartInformation>
                <BarChart
                  pessoal={pessoais}
                  empresariais={empresariais}
                />
              </ChartInformation>
              </CardFull>
            </CardContainer>

            <CircleProgress style={{ marginLeft: '-32px' }}>
              <CircleContainer className='shadow'>
                <p>Propostas Emitidas</p>
                <div style={{ width: "200px"}}>
                  <div>
                    <CircularProgressbarWithChildren
                      value={projects.length}
                      styles={buildStyles({
                        pathColor: "#65E213",
                        trailColor: "#E0FBCE"
                      })}
                    >
                        <CircleText>{projects.length}</CircleText>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </CircleContainer>

              <CircleContainer className='shadow'>
                <p>Potência das Propostas</p>
                <div style={{ width: "200px"}}>
                  <div>
                    <CircularProgressbarWithChildren
                      value={80}
                      styles={buildStyles({
                        pathColor: "#65E213",
                        trailColor: "#E0FBCE"
                      })}
                    >
                        <CircleText>R$ 123.123.22</CircleText>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </CircleContainer>

              <CircleContainer className='shadow'>
                <p>Valor das Propostas</p>
                <div style={{ width: "200px" }}>
                  <div>
                    <CircularProgressbarWithChildren
                      value={60}
                      styles={buildStyles({
                        pathColor: "#65E213",
                        trailColor: "#E0FBCE"
                      })}
                    >
                        <CircleText>345.40 kWp</CircleText>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </CircleContainer>
            </CircleProgress>



           <Title style={{ marginTop: '70px', marginLeft: '20px' }}>Notícias</Title>
           <NoticiesCards>
              <NoticiesCard className='shadow'>
                  <header>
                    <p>Total das Propostas</p>
                    <div>
                      <p>Novo</p>
                    </div>
                  </header>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </p>

                  <div>
                    <GoCalendar color='#5E5E5E' size={25} />
                    <span>13/01/2020</span>
                  </div>
              </NoticiesCard>

              <NoticiesCard className='shadow'>
                  <header>
                    <p>Total das Propostas</p>
                    <div>
                      <p>Novo</p>
                    </div>
                  </header>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </p>

                  <div>
                    <GoCalendar color='#5E5E5E' size={25} />
                    <span>13/01/2020</span>
                  </div>
              </NoticiesCard>

              <NoticiesCard className='shadow'>
                  <header>
                    <p>Total das Propostas</p>
                    <div>
                      <p>Novo</p>
                    </div>
                  </header>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </p>

                  <div>
                    <GoCalendar color='#5E5E5E' size={25} />
                    <span>13/01/2020</span>
                  </div>
              </NoticiesCard>
           </NoticiesCards>   
      </Container>
    );
  }
}
