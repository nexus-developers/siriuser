import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Dashboard from  './pages/Dashboard/Dashboard'
import Projects from './pages/Projects/Projects'
import Contatcs from './pages/Contacts/Contacts'

export default function routes() {
  return (
    <Switch>
        <Route path='/' exact  component={Dashboard}/>
        <Route path='/projects' component={Projects}/> 
        <Route path='/contacts' component={Contatcs}/>
    </Switch>
  );
}
