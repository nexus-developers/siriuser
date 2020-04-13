import React, { Component } from 'react';

import { Link } from 'react-router-dom'
 
import Logo from '../../styles/GlobalAssets/logo.png'

import { FaRegQuestionCircle, FaMedal } from 'react-icons/fa'

import { GoSignOut } from 'react-icons/go'

import { Navbar } from './styles'

export default class Header extends Component {
 

  render(){

    return (


        <div>
          <Navbar className="navbar navbar-expand-lg navbar-light fixed-top flex-md-nowrap" style={{backgroundColor:'#fff' }}>
              <Link to='/' className="navbar-brand ml-2" style={{fontWeight: 'bold'}}>
                  <img src={Logo} style={{width: '120px'}} alt="logo"/>
              </Link>
                <ul className="navbar-nav px-3 ml-auto">
                    <li className="nav-item text-nowrap ">
                        <Link to='' className="nav-link active" style={{fontWeight: 'bold', color: '#FFD000', marginRight: '40px'}}>
                          <FaMedal size={28}/>
                          <span style={{ color: '#000', marginRight: '10px' }}>INTEGRADOR OURO</span>
                        </Link>
                    </li>
                    <li className="nav-item text-nowrap ">
                        <a href='http://siriuser.com/' className="nav-link active" style={{fontWeight: 'bold', color: '#D3D3D3'}}>
                          <FaRegQuestionCircle size={28}/>
                        </a>
                    </li>
                    <li className="nav-item text-nowrap ">
                        <button onClick={() => this.showMenu()} className="nav-link active" style={{fontWeight: 'bold', marginTop: '2px' ,color: '#F54141', background: 'none', outline: 'none', border: 'none'}}>
                          <GoSignOut size={28}/>
                        </button>
                    </li>
                </ul>
          </Navbar> 
      </div>
    );
  }
}
