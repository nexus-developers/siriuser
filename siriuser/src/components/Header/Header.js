import React, { Component } from 'react';

import { Link } from 'react-router-dom'
 
import Logo from '../../styles/GlobalAssets/logo.png'

import { FaRegUserCircle, FaBell, FaRegQuestionCircle, FaMedal } from 'react-icons/fa'

import { Navbar, DropdownMenu } from './styles'

export default class Header extends Component {
  state = {
    showMenu: false
  }

  showMenu = () =>{
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu = () =>{
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render(){
  const { showMenu } = this.state 

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
                        <button onClick={() => this.showMenu()} className="nav-link active" style={{fontWeight: 'bold', color: '#00CA00', background: 'none', outline: 'none', border: 'none'}}>
                          <FaRegUserCircle size={28}/>
                        </button>

                       {
                          showMenu ? (
                          <DropdownMenu className='shadow'>
                            <ul>
                              <li>
                                <Link>
                                 Meu Perfil
                                </Link>
                              </li>
                              <li>
                                <Link>
                                  Meus Clientes
                                </Link>
                              </li>
                              <li>
                                <Link>
                                  Meus Negócios
                                </Link>
                              </li>
                              <li>
                                <Link>
                                  Configurações
                                </Link>
                              </li>
                              <li>
                                <Link>
                                  Meus Orçamentos
                                </Link>
                              </li>
                              <li>
                                <Link>
                                  LogOut
                                </Link>
                              </li>
                            </ul>
                          </DropdownMenu>
                         ) : (
                           null
                         )
                       }

                    </li>
                </ul>
          </Navbar> 
      </div>
    );
  }
}
