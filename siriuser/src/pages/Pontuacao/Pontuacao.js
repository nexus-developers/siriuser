import React from 'react';

import { Container } from '../../styles/Container';

import { Title, CardsContainer, Card } from './styles'

export default function Pontuacao() {
  return (
    <Container>
      <Title>Pontuação</Title>
      <div style={{ width: '95%', display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 0 }}>
        <hr style={{ width: '50px', height: '10px', backgroundColor: '#65E213', border: 'none', borderRadius: '15px', marginRight: '10px' }}/>
        <hr style={{ width: '150px', height: '10px', backgroundColor: '#B9F98F', border: 'none', borderRadius: '15px' }}/>
      </div>

      <div style={{ width: '95%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
          <p style={{ color: '#BCBCBC', fontWeight: 'bold', fontSize: '22px' }}>Pontuação Atual: <span style={{fontWeight: '100'}}>1350/1500</span></p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
          <select className='form-control' style={{ width: '250px', marginRight: '30px' }}>
            <option>Abril</option>
            <option>Maio</option>
            <option>Junho</option>
            <option>Julho</option>
          </select>

          <select className='form-control' style={{ width: '250px' }}>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </div>
      </div>

      <CardsContainer>
        <Card className='shadow'>
          <div style={{ width: '50%', display: 'flex', flexDirection: 'column', marginLeft: '20px', marginTop: '5px' }}>
            <h5>Descrição:</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div style={{ width: '50%', backgroundColor: '#f2f2f2', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}>
            <div style={{  display: 'flex', flexDirection: 'column', marginRight: '100px' }}>
              <h5>Quantidade:</h5>  
              <h3>500</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h5>Data:</h5>
              <h3>03/01/2020</h3>
            </div>
          </div>
        </Card>
      </CardsContainer>
    </Container>
  );
}
