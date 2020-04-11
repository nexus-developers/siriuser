import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './styles/global.css'

import GlobalStyle from './styles/global'

import Routes from './routes'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
// import Modal from './pages/Modals/ContactModal'

import store from './store'


// import firebase from './firebase';


export default function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes/>
          <Header/>
          <Sidebar/>
        </BrowserRouter>
        <GlobalStyle/>
      </Provider>
    );
  }
