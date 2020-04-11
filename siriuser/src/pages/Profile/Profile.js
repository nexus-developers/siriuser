import React, { useState } from 'react';

import { Container } from '../../styles/Container';

import { ProgressContainer, CardProfile, Services, Cancel, Register } from './styles'

import { MdSettings } from 'react-icons/md'

import ProfilePic from './Assets/pp.jpg'

export default function Profile() {
    const [ nivel, setNivel ] = useState(80)
    const [ atual, setAtual ] = useState(10)

    const [edit, setEdit]= useState(false)

  return (
    <Container>
        <h1 style={{ fontWeight: 'bold', color: '#5E5E5E' }}>Meu Perfil</h1>
        <small style={{ color: '#5E5E5E' }}>Clique no iconde de engrenagem para editar os campos</small>

        <ProgressContainer>
            <p style={{ marginBottom: '0' }}>Progresso para o próximo nível:</p>
            
            <p style={{ textAlign: 'end' }}>Nível {`${atual}`} - <span>Integrador Prata</span></p>
            <div class="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={`${nivel}`} aria-valuemin="0" aria-valuemax="100" style={{ width: `${nivel}%`, backgroundColor: '#65E213' }}></div>
            </div>
            <p style={{ textAlign: 'end', marginTop: '10px' }}>{`${nivel}% para nivel ${atual + 1}`}</p>
        </ProgressContainer>

        <CardProfile className='shadow'>
            <img src={ProfilePic} alt='pp'/>
            <div>
                <h3>Bruno Sirius</h3>
                <p style={{ marginTop: '0px' }}>brunosirius@corp.com</p>
            
                <p style={{ fontWeight: 'bold' }}>Nível 10 - <span>Integrador Prata</span></p>
            </div>
            <button
                onClick={() => setEdit(true)}
            >
                <MdSettings size={30} color='#FFF' />
            </button>
        </CardProfile>

       {
           edit ? (
            <Services>
                <div>
                    <label>Cadastrar Serviço:</label>
                    <small>Serviços cadastrados podem ser adicionados nos orçamentos.</small>
                    <input className='form-control'/>
                </div>
                
                <div>
                    <label>Catêgoria:</label>
                    <select className='form-control'>
                        <option>categoria</option>
                        <option>categoria</option>
                        <option>categoria</option>
                        <option>categoria</option>
                    </select>
                </div>

                <div>
                    <Cancel onClick={() => setEdit(false)}>Cancelar</Cancel>
                    <Register>Cadastrar</Register>
                </div>
            </Services>
           ) : (
               null
           )
       }
    </Container>
  );
}
