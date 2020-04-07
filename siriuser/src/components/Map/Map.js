import React, { Component, useState } from 'react'

import { Container, ContainerMap, InputMap, ButtonMap } from './styles'

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import PlacesAutocomplete ,{ geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class Maps extends Component{
    constructor(props) {
        super(props);
        this.state = {
            address: ''
        };
    }

    address = e => {
        this.setState({
            address: e
        });
    }

    handleSelect = async value => {};

    render(){
        // const { address } = this.state
        console.log(this.state.address)
        return(
            <Container>
                <ContainerMap>
                    {/* <InputMap className="form-control shadow" placeholder='Digite o endereço'/> */}
                    {/* <ButtonMap className='btn btn-success shadow'>
                        Buscar
                    </ButtonMap> */}
                </ContainerMap>
                {/* Utilização google maps baseado em latitude e longitude */}
                <GoogleMap defaultZoom={14} defaultCenter={{lat: -8.124176, lng: -34.898745}} style = {mapStyles} />
                <PlacesAutocomplete value={this.state.address} onChange={this.address} onSelect={this.handleSelect()} ref='address'>
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                        <div>
                            <InputMap className="form-control shadow" {...getInputProps({placeholder: 'Digite o endereço'})} />
                            {/* <input {...getInputProps({ placeholder: "Type address" })} /> */}
                            
                            <div>
                                {loading ? <div>...loading</div> : null}

                                {
                                    suggestions.map((suggestion => {
                                        return <div>{suggestion.description}</div>
                                    }))
                                }
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>


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