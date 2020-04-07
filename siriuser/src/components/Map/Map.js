import React, { Component } from 'react'

import { Container, ContainerMap, InputMap, ButtonMap } from './styles'

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class Maps extends Component{
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            lat: -8.124176,
            lng: -34.898745
        };
    }

    address = e => {
        this.setState({
            address: e
        });
    }

    handleSelect = async value => {
        const result = await geocodeByAddress(value);
        const latLng = await getLatLng(result[0]);
        console.log(latLng)
        this.setState(latLng);
        this.setState({address: value});
    };

    render(){
        // const { lat, lng } = this.state
        // console.log(this.state.address)
        return(
            <Container>
                <ContainerMap>
                    {/* <InputMap className="form-control shadow" placeholder='Digite o endereço'/> */}
                    {/* <ButtonMap className='btn btn-success shadow'>
                        Buscar
                    </ButtonMap> */}
                </ContainerMap>
                {/* Utilização google maps baseado em latitude e longitude */}
                <GoogleMap defaultZoom={14} center={{lat: this.state.lat, lng: this.state.lng}} style = {mapStyles} />
                <PlacesAutocomplete value={this.state.address} onChange={this.address} onSelect={this.handleSelect} ref='address'>
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                        <div>
                            <p>Lat: {this.state.lat}</p>
                            <p>Lng: {this.state.lng}</p>
                            <InputMap className="form-control shadow" {...getInputProps({placeholder: 'Digite o endereço'})} />
                            {/* <input {...getInputProps({ placeholder: "Type address" })} /> */}
                            
                            <div>
                                {loading ? <div>...loading</div> : null}

                                {
                                    suggestions.map((suggestion => {
                                        const style = {
                                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                        };

                                        return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
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
//     apiKey: ('AIzaSyAB-xvZm8wx8Doshepy284rjII_U2zZkfs') AIzaSyD7_bPvT5h2rMlVMADZwvPJoaydPsUBnJ8
// })(Maps)

const mapStyles = {
    width: '95%',
    height: '300px',
  };