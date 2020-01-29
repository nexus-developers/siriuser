import React from 'react';

import styled from 'styled-components'

export default function Notifications({ title, description }) {
  return (
      <div className='col-md-3'>
        <Card className='shadow'>
        <CardTitle className='text-center'>{title}</CardTitle>
            <hr></hr>
        <CardDescription className='text-center'>
            <i class="fas fa-check-double mr-2"></i>
                {description}
        </CardDescription>
        <CardDescription className='text-center'>
            <i class="fas fa-ban mr-2"></i>
                Proposta Recusada
        </CardDescription>
        <CardDescription className='text-center'>
        <i class="far fa-clock mr-2"></i>
                Reavaliação
        </CardDescription>
        <CardDescription className='text-center'>
        <i class="fas fa-check-double mr-2"></i>
                Reavaliado
        </CardDescription>
        <CardDescription className='text-center'>
        <i class="fas fa-check-double mr-2"></i>
               Proposta Aceita
        </CardDescription>
        </Card>
      </div>
  );
}


const Card = styled.div`

    width: 250px;
    padding-bottom: 10px;
    border-radius: 5px;
    margin-top: 85px;
    background-color: #fff;

`

const CardTitle = styled.h5`
    font-weight: bold;
    letter-spacing: 2px;
    padding-top: 10px;

`

const CardDescription = styled.p`
    font-size: 15px
`