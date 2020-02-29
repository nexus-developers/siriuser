import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Dashboard from  './pages/Dashboard/Dashboard'
import Projects from './pages/Projects/Projects'
import Contatcs from './pages/Contacts/Contacts'
import Negocios from './pages/Negocios/Negocios'

export default function routes() {
  return (
    <Switch>
        <Route path='/' exact  component={Dashboard}/>
        <Route path='/projects' component={Projects}/> 
        <Route path='/contacts' component={Contatcs}/>
        <Route path='/negocios' component={Negocios}/>
    </Switch>
  );
}
