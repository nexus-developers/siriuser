import React from 'react';

import { Switch, Route } from 'react-router-dom'

// Routes
import Dashboard from  './pages/Dashboard/Dashboard'
import Projeto from './pages/Projects/Personalizado/Projects'
import Contatcs from './pages/Contacts/Contacts'
import Garantia from './pages/Garantia/Garantia'
import Pontuacao from './pages/Pontuacao/Pontuacao'
import Arquivos from './pages/Arquivos/Arquivos'
import Payment from './pages/Payment/Payment'
import Profile from './pages/Profile/Profile'

// Navigation
export default function routes() {
  return (
    <Switch>
        <Route path='/' exact  component={Dashboard}/>
        <Route path='/projects/personalizado' exact component={Projeto}/> 
        <Route path='/contacts' component={Contatcs}/>
        <Route path='/garantia' component={Garantia}/>
        <Route path='/pontuacao' component={Pontuacao}/>
        <Route path='/arquivos' component={Arquivos}/>
        <Route path='/payment' component={Payment} />
        <Route path='/profile' component={Profile} />
    </Switch>
  );
}
