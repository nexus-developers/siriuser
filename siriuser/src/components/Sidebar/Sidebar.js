import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { IoMdSpeedometer,  IoMdCalculator } from 'react-icons/io'

import { FaUserAlt, FaMedal, FaCertificate, FaUserTie } from 'react-icons/fa'

import { AiOutlineDownload } from 'react-icons/ai' 

import { Container, Row, Sidebarr, StickySidebar, UlBrand, UlPages } from './styles'


export default class Sidebar extends Component {
  render(){

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
                <Link to='/projects/personalizado'>
                  <span className='mr-3'>
                    <IoMdCalculator size={20} />
                  </span>
                  Orçamentos
                </Link>
              </li>
                <li>
                  <Link to='/arquivos'>
                    <span className='mr-3'>
                      <AiOutlineDownload size={20} />
                    </span>
                    Arquivos
                  </Link>
                </li>
                <li>
                  <Link to='/pontuacao'>
                    <span className='mr-3'>
                      <FaMedal size={20} />
                    </span>
                    Pontuação
                  </Link>
                </li>
                 <li>
                  <Link to='/garantia'>
                    <span className='mr-3'>
                      <FaCertificate size={20} />
                    </span>
                    Garantias
                  </Link>
                </li>
                <li>
              <Link to='/profile'>
                  <span className='mr-3'>
                      <FaUserTie size={19} />
                  </span>
                    Perfil
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
