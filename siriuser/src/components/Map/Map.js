import React, { Component } from 'react'

import { Container, ContainerMap, InputMap, AutoComplete } from './styles'

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
                    <GoogleMap defaultZoom={14} center={{lat: this.state.lat, lng: this.state.lng}} style={{width: '100%', height: 100}}/>
                </ContainerMap>
                <AutoComplete>
                    <PlacesAutocomplete value={this.state.address} onChange={this.address} onSelect={this.handleSelect} ref='address'>
                        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                            <div>
                                <InputMap {...getInputProps({placeholder: 'Digite o endereço'})} />
                                <div>
                                    {loading ? <div>...loading</div> : null}

                                    {
                                        suggestions.map((suggestion => {
                                            const style = {
                                                backgroundColor: suggestion.active ? "#32d11d" : "#fff"
                                            };

                                            return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                                        }))
                                    }
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                </AutoComplete>
            </Container>
        )
    }
}
const WrappedMap = withScriptjs(withGoogleMap(Maps));

export default WrappedMap;

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyAB-xvZm8wx8Doshepy284rjII_U2zZkfs') AIzaSyD7_bPvT5h2rMlVMADZwvPJoaydPsUBnJ8
// })(Maps)
