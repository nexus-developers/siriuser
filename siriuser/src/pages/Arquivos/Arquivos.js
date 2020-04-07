import React from 'react';

import { Container } from '../../styles/Container';

import { FaFileArchive,  } from 'react-icons/fa'

import { FiDownload } from 'react-icons/fi'

import { IoMdClose } from 'react-icons/io'

import { Title, CardsDownload, Card, LargeCard} from './styles'

import Icon from './Assets/icon.png'

export default function Arquivos() {
  return (
    <Container>
      <Title>Orçamentos Recentes</Title>
      <CardsDownload className='row'>
        <Card className='shadow'>
          <FaFileArchive size={40} color='#5E5E5E' style={{display: 'flex', alignSelf: 'center'}} />
          <div>
            <p>Orçamento 06/04/2020</p>
            <small>Horário: 14:00</small>
          </div>
            <button style={{ marginRight: '5px' }}>
              <FiDownload size={15} color='#000'/>
            </button>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
        </Card>
        <Card className='shadow'>
          <FaFileArchive size={40} color='#5E5E5E' style={{display: 'flex', alignSelf: 'center'}} />
          <div>
            <p>Orçamento 06/04/2020</p>
            <small>Horário: 14:00</small>
          </div>
            <button style={{ marginRight: '5px' }}>
              <FiDownload size={15} color='#000'/>
            </button>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
        </Card>
        <Card className='shadow'>
          <FaFileArchive size={40} color='#5E5E5E' style={{display: 'flex', alignSelf: 'center'}} />
          <div>
            <p>Orçamento 06/04/2020</p>
            <small>Horário: 14:00</small>
          </div>
            <button style={{ marginRight: '5px' }}>
              <FiDownload size={15} color='#000'/>
            </button>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
        </Card>
        <Card className='shadow'>
          <FaFileArchive size={40} color='#5E5E5E' style={{display: 'flex', alignSelf: 'center'}} />
          <div>
            <p>Orçamento 06/04/2020</p>
            <small>Horário: 14:00</small>
          </div>
            <button style={{ marginRight: '5px' }}>
              <FiDownload size={15} color='#000'/>
            </button>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
        </Card>
      </CardsDownload>
      <hr style={{ width: '87%' }} />

      <Title>Orçamentos - Março 2020</Title>

      <CardsDownload className='row'>
        <LargeCard className='shadow'>
          <div>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
          </div>
          <img src={Icon} />
          <p>Orçamento 06/04/2020</p>
          <small>Horário: 14:00</small>
          <button>
            Download
          </button>
        </LargeCard>

        <LargeCard className='shadow'>
          <div>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
          </div>
          <img src={Icon} />
          <p>Orçamento 06/04/2020</p>
          <small>Horário: 14:00</small>
          <button>
            Download
          </button>
        </LargeCard>

        <LargeCard className='shadow'>
          <div>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
          </div>
          <img src={Icon} />
          <p>Orçamento 06/04/2020</p>
          <small>Horário: 14:00</small>
          <button>
            Download
          </button>
        </LargeCard>

        <LargeCard className='shadow'>
          <div>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
          </div>
          <img src={Icon} />
          <p>Orçamento 06/04/2020</p>
          <small>Horário: 14:00</small>
          <button>
            Download
          </button>
        </LargeCard>

        <LargeCard className='shadow'>
          <div>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
          </div>
          <img src={Icon} />
          <p>Orçamento 06/04/2020</p>
          <small>Horário: 14:00</small>
          <button>
            Download
          </button>
        </LargeCard>

        <LargeCard className='shadow'>
          <div>
            <button>
              <IoMdClose size={15} color ='#000'/>
            </button>
          </div>
          <img src={Icon} />
          <p>Orçamento 06/04/2020</p>
          <small>Horário: 14:00</small>
          <button>
            Download
          </button>
        </LargeCard>
      </CardsDownload>
    </Container>
  );
}
