import React from 'react';

import styled from 'styled-components'

export default function Cards({ title, description }) {
  return (
      <div className='row'>
          <div className='col-md-3'>
            <Card className='shadow'>
            <CardTitle className='text-center'>{title}</CardTitle>
            <CardDescription className='text-center'>{description}</CardDescription>
            </Card>
          </div>
      </div>
  );
}


const Card = styled.div`

    width: 250px;
    height: 150px;
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
    font-size: 30px
`