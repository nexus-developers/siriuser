import React from 'react';

import Header from '../components/Header/Header'
import Sidebar from'../components/Sidebar/Sidebar'
import Informations from '../components/Cards/Informations'
import Notifications from '../components/Cards/Notifications'

export default function pages() {
  return (
    <div style={{ overflowY: 'none' }}>
        <Header/>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar/>
          </div>
            <div className='col-md-2'>
              <Informations title='Propostas Emitidas' description='4'/>
            </div>
            <div className='col-md-2'>
              <Informations title='Valor Total' description='R$ 104.293.25'  />
            </div>
            <div className='col-md-2'>
              <Informations title='Potência Total' description='25.34 kWp'/>
            </div>
            <div className='col-md-2'>
              <Notifications title='Notificações' description='Proposta Enviada'/>
            </div>
        </div>
    </div>
  );
}
