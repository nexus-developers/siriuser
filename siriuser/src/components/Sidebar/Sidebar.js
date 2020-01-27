import React from 'react';

import FavIcon from './assets/favicon.png'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

export default function Sidebar() {

  return (
    <Sidebardiv className='container-fluid fixed-top'>
        <div className="row">
            <div className="col-md-2 bg-light sidebar"  style={{backgroundColor: 'rgb(190, 190, 190)'}}>
                <StickySidebar>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link className="nav-link active" href="#" style={{color: 'rgb(51, 51, 51)', marginTop: '85px', fontWeight: 'bold'}} >
                        <img src={ FavIcon } alt="" style={{width: '25px'}}/>
                          DashBoard
                        </Link>
                        <hr/>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active" to='' style={{color: 'rgb(8, 8, 8)', textDecoration: 'none', fontWeight: 'bold'}}>
                            <span><i className="fas fa-shopping-cart mr-3" style={{color: '#5D5D5D'}}></i></span>Products
                        </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to='' style={{color: 'rgb(8, 8, 8)', textDecoration: 'none', fontWeight: 'bold'}}>
                          <span><i className="far fa-file mr-3 ml-1" style={{color: '#5D5D5D'}}></i></span>Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='' style={{color: 'rgb(8, 8, 8)', textDecoration: 'none', fontWeight: 'bold'}}>
                            <span><i className="fas fa-sliders-h mr-3 ml-1" style={{color: '#5D5D5D'}}></i></span>Settings
                        </Link>
                      </li>
                    </ul>
                </StickySidebar>
            </div>
        </div>
    </Sidebardiv>
  );
}

const StickySidebar = styled.div`
position: relative;
top: 0;
height: 100vh;
`
const Sidebardiv = styled.div`
z-index: -1

`

