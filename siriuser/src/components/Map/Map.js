import React, { Component } from 'react'

import { Container, ContainerMap, InputMap, ButtonMap } from './styles'

import {Map, InfoWindow,  GoogleApiWrapper} from 'google-maps-react';

class Maps extends Component{
    render(){
        return(
            <Container>
                <ContainerMap>
                    <InputMap className="form-control shadow" placeholder='Digite o endereço'/>
                    <ButtonMap className='btn btn-success shadow'>
                        Buscar
                    </ButtonMap>
                </ContainerMap>
                <Map google={this.props.google} zoom={14}  style={mapStyles} >
                
                </Map>


            </Container>
        )
    }
}

export default  GoogleApiWrapper({
    apiKey: ('*****')
})(Maps)

const mapStyles = {
    width: '95%',
    height: '300px',
  };