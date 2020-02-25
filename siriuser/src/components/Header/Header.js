import React from 'react';

import { Link } from 'react-router-dom'
 
import Logo from '../../styles/GlobalAssets/logo.png'

import { FaRegUserCircle, FaBell, FaRegQuestionCircle, FaMedal } from 'react-icons/fa'

import { Navbar } from './styles'

export default function Header() {
  return (
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top flex-md-nowrap" style={{backgroundColor:'#fff' }}>
            <Link to='/' className="navbar-brand ml-2" style={{fontWeight: 'bold'}}>
                <img src={Logo} style={{width: '200px'}} alt="logo"/>
            </Link>
              <ul className="navbar-nav px-3 ml-auto">
                  <li className="nav-item text-nowrap ">
                      <Link to='' className="nav-link active" style={{fontWeight: 'bold', color: '#FFD000', marginRight: '40px'}}>
                        <FaMedal size={28}/>
                        <span style={{ color: '#000', marginRight: '10px' }}>INTEGRADOR OURO</span>
                      </Link>
                  </li>
                  <li className="nav-item text-nowrap ">
                      <Link to='' className="nav-link active" style={{fontWeight: 'bold', color: '#D3D3D3'}}>
                        <FaRegQuestionCircle size={28}/>
                      </Link>
                  </li>
                  <li className="nav-item text-nowrap ">
                      <Link to='' className="nav-link active" style={{fontWeight: 'bold', color: '#D3D3D3'}}>
                        <FaBell size={28}/>
                      </Link>
                  </li>
                  <li className="nav-item text-nowrap ">
                      <Link to='' className="nav-link active" style={{fontWeight: 'bold', color: '#00CA00'}}>
                        <FaRegUserCircle size={28}/>
                      </Link>
                  </li>
              </ul>
        </Navbar> 
    </div>
  );
}
