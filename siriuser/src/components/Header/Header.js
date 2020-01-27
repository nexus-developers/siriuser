import React from 'react';

import { Link } from 'react-router-dom'
 
import Logo from './assets/logo.png'

export default function Header() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow flex-md-nowrap" style={{backgroundColor:'#fff'}}>
            <Link to='/' className="navbar-brand ml-2" style={{fontWeight: 'bold'}}>
                <img src={Logo} style={{width: '200px'}} alt="logo"/>
            </Link>
                <input className="form-control form-control-light w-100 ml-5 mr-4" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor: '#06E500', border: 'none'}}/>
              <ul className="navbar-nav px-3">
                  <li className="nav-item text-nowrap">
                      <Link to='' className="nav-link active" style={{fontWeight: 'bold', color: '#5D5D5D'}}>Sign Out</Link>
                  </li>
              </ul>
        </nav> 
    </div>
  );
}
