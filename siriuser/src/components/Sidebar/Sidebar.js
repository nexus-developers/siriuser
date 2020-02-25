import React from 'react';

import { Link } from 'react-router-dom'
import FavIcon from './assets/favicon.png'

import { IoIosOptions, IoMdSpeedometer, IoMdFiling, IoMdCalculator } from 'react-icons/io'

import { MdSettingsInputComponent } from 'react-icons/md'

import { FaUserAlt, FaMedal } from 'react-icons/fa'

import { AiOutlineDownload } from 'react-icons/ai' 

import { Container, Row, Sidebarr, StickySidebar, UlBrand, UlPages } from './styles'


export default function Sidebar() {
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
            <Link to='/projects'>
                <span className='mr-3'>
                    <IoMdFiling size={20} />
                  </span>
                    Negócios
                </Link>
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

    // <div className='container-fluid fixed-top' style={{ zIndex: '-1' }}>
    //   <div className='row'>
    //     <div className='col-lg-2 bg-light sidebar'>
    //       <div className='sticky-sidebar'>
    //         <ul className='ul-brand'>
    //           <li>
    //             <Link to='/' className='text-center'>
    //               <span>
    //                 <img src={FavIcon} width={25} style={{ marginRight: '10px' }}/>
    //               </span>
    //               DashBoard
    //             </Link>
    //           </li>
    //         </ul>
    //         <hr/>
    //         <ul className='ul-pages'>
    //           <li>
    //               <Link to='/projects'>
    //                 <span className='mr-3'>
    //                   <IoIosArchive size={20} />
    //                 </span>
    //                 Projects
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to='/contacts'>
    //                 <span className='mr-3'>
    //                   <FaUserAlt size={19} />
    //                 </span>
    //                 Contatos
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to='/products'>
    //                 <span className='mr-3'>
    //                   <IoIosAddCircle size={20} />
    //                 </span>
    //                 Products
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to='/settings'>
    //                 <span className='mr-3'>
    //                   <IoIosOptions size={20} />
    //                 </span>
    //                 Settings
    //               </Link>
    //             </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
