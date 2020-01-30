import React from 'react';

import { Link } from 'react-router-dom'
import FavIcon from './assets/favicon.png'

import { IoIosAddCircle, IoIosArchive, IoIosOptions } from 'react-icons/io'

import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='container-fluid fixed-top' style={{ zIndex: '1' }}>
      <div className='row'>
        <div className='col-md-2 bg-light sidebar'>
          <div className='sticky-sidebar'>
            <ul className='ul-brand'>
              <li>
                <Link to='/' className='text-center'>
                  <span>
                    <img src={FavIcon} width={25} style={{ marginRight: '10px' }}/>
                  </span>
                  DashBoard
                </Link>
              </li>
            </ul>
            <hr/>
            <ul className='ul-pages'>
              <li>
                  <Link to='/projects'>
                    <span className='mr-3'>
                      <IoIosArchive size={20} />
                    </span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to='/products'>
                    <span className='mr-3'>
                      <IoIosAddCircle size={20} />
                    </span>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to='/settings'>
                    <span className='mr-3'>
                      <IoIosOptions size={20} />
                    </span>
                    Settings
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
