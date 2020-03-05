import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Dashboard from  './pages/Dashboard/Dashboard'

import ProjetoPersonalizado from './pages/Projects/Personalizado/Projects'
import ProjetoPorKit from './pages/Projects/PorKits/Kits'
import Contatcs from './pages/Contacts/Contacts'
import Negocios from './pages/Negocios/Negocios'

export default function routes() {
  return (
    <Switch>
        <Route path='/' exact  component={Dashboard}/>
        <Route path='/projects/personalizado' exact component={ProjetoPersonalizado}/> 
        <Route path='/projects/kits' component={ProjetoPorKit} />
        <Route path='/contacts' component={Contatcs}/>
        <Route path='/negocios' component={Negocios}/>
    </Switch>
  );
}
