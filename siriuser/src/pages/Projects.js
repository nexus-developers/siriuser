import React, { Component } from 'react';

import Header from '../components/Header/Header'
import Sidebar from'../components/Sidebar/Sidebar'

export default class pages extends Component {


  render() {
    
      return (
        <div style={{ overflowY: 'none' }}>
          <Header/>
          <Sidebar/>
        </div>
    );
  }
}

