import React from 'react';

import { Switch, Route } from 'react-router-dom'

// Routes
import Dashboard from  './pages/Dashboard/Dashboard'
import ProjetoPersonalizado from './pages/Projects/Personalizado/Projects'
import ProjetoPorKit from './pages/Projects/PorKits/Kits'
import Contatcs from './pages/Contacts/Contacts'
import Negocios from './pages/Negocios/Negocios'
import Garantia from './pages/Garantia/Garantia'
import Pontuacao from './pages/Pontuacao/Pontuacao'
import Arquivos from './pages/Arquivos/Arquivos'
import Componentes from './pages/Componentes/Componentes.js'
import Payment from './pages/Payment/Payment'
// Navigation
export default function routes() {
  return (
    <Switch>
        <Route path='/' exact  component={Dashboard}/>
        <Route path='/projects/personalizado' exact component={ProjetoPersonalizado}/> 
        <Route path='/projects/kits' component={ProjetoPorKit} />
        <Route path='/contacts' component={Contatcs}/>
        <Route path='/negocios' component={Negocios}/>
        <Route path='/garantia' component={Garantia}/>
        <Route path='/pontuacao' component={Pontuacao}/>
        <Route path='/arquivos' component={Arquivos}/>
        <Route path='/componentes' component={Componentes}/>
        <Route path='/payment' component={Payment} />
    </Switch>
  );
}
