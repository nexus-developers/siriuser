import React from 'react';

import Header from '../components/Header/Header'
import Sidebar from'../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'

import styled from 'styled-components';



export default function pages() {
  return (
    <div style={{ overflowY: 'none' }}>
        <Header/>
          <Sidebar/>
        <ContainerMain>
          <Main/>
        </ContainerMain>

        </div>
  );
}


const ContainerMain = styled.div`
  display: flex;
  margin-left: 320px;
  justify-content: space-evenly
  
`


