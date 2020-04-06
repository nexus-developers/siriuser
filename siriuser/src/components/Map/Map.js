import React, { Component } from 'react'

import { Container, ContainerMap, InputMap, ButtonMap } from './styles'

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

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
                <GoogleMap defaultZoom={14} defaultCenter={{lat: -8.124176, lng: -34.898745}} style = {mapStyles} />


            </Container>
        )
    }
}
const WrappedMap = withScriptjs(withGoogleMap(Maps));

export default WrappedMap;

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyAB-xvZm8wx8Doshepy284rjII_U2zZkfs')
// })(Maps)

const mapStyles = {
    width: '95%',
    height: '300px',
  };