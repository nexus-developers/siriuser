import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from  './pages/Dashboard'
import Projects from './pages/Projects'

export default function routes() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact  component={Dashboard}/>
            <Route path='/projects' component={Projects}/> 
        </Switch>
    </Router>
  );
}
