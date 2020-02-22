import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './styles/global.css'

import GlobalStyle from './styles/global'

import Routes from './routes'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


import firebase from './firebase';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes/>
        <Header/>
        <Sidebar/>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
  }
