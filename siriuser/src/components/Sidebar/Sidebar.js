import React, { Component } from 'react';

import { Link } from 'react-router-dom'


import { IoIosOptions, IoMdSpeedometer, IoMdFiling, IoMdCalculator } from 'react-icons/io'

import { MdSettingsInputComponent, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import { FaUserAlt, FaMedal, FaFileSignature } from 'react-icons/fa'

import { AiOutlineDownload } from 'react-icons/ai' 

import { Container, Row, Sidebarr, StickySidebar, UlBrand, UlPages, DropDownMenu } from './styles'


export default class Sidebar extends Component {
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
    <Container >
      <Row>
        <Sidebarr className=''>
        <StickySidebar>
          <UlBrand/>
          <UlPages>
          <li>
              <Link to='/' className='text-center'>
                <span className='mr-3'>
                <IoMdSpeedometer size={20} />
                </span>
                  DashBoard
              </Link>
            </li>
            <li>
              <Link to='/contacts'>
                  <span className='mr-3'>
                      <FaUserAlt size={19} />
                  </span>
                    Clientes
              </Link>
            </li>
            <li>
            <Link to='/negocios'>
                <span className='mr-3'>
                    <IoMdFiling size={20} />
                  </span>
                    Negócios
                </Link>
            </li>
            <li>
            <Link>
                <button className='mr-3' onClick={() => this.showMenu()} style={{ outline: 'none', border: 'none',  background: 'transparent',  fontWeight: 'bold', color: 'rgb(51, 51, 51)' }}>
                    <FaFileSignature size={20} style={{marginRight: '15px'}} />
                      Projetos 
                      <span style={{ marginLeft: '10px' }}> 
                        {
                          showMenu ? ( 
                            <MdKeyboardArrowUp />
                           ) : (
                            <MdKeyboardArrowDown  />
                           )
                        }
                      </span>
                  </button>
                </Link>
                {
                  showMenu ? (
                    <DropDownMenu>
                      <li className='mt-3'>
                        <Link to='/projects/personalizado'>
                          Personalizado 
                        </Link>
                      </li>
                      <li>
                        <Link to='/projects/kits'>
                          Por Kits 
                        </Link>
                      </li>
                    </DropDownMenu>
                  ) : (
                    null
                  )
                }
            </li>
                <li>
                  <Link to='/products'>
                    <span className='mr-3'>
                      <MdSettingsInputComponent size={20} />
                    </span>
                    Componentes
                  </Link>
                </li>
                <li>
                  <Link to='/products'>
                    <span className='mr-3'>
                      <IoMdCalculator size={20} />
                    </span>
                    Orçamentos
                  </Link>
                </li>
                <li>
                  <Link to='/products'>
                    <span className='mr-3'>
                      <AiOutlineDownload size={20} />
                    </span>
                    Arquivos
                  </Link>
                </li>
                <li>
                  <Link to='/settings'>
                    <span className='mr-3'>
                      <IoIosOptions size={20} />
                    </span>
                    Configurações
                  </Link>
                </li>
                <li>
                  <Link to='/products'>
                    <span className='mr-3'>
                      <FaMedal size={20} />
                    </span>
                    Pontuação
                  </Link>
                </li>

          </UlPages>
        </StickySidebar>
        </Sidebarr>
      </Row>
    </Container>
    );
  }
}
