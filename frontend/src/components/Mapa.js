import React, { Fragment } from 'react';

import { Map, Marker, TileLayer, Popup} from 'react-leaflet';
import { Icon } from 'leaflet';

import useCurrentLocation from '../hooks/useCurrentLocation'

import '../css/Mapa.css';

import pin from '../img/pin.svg';

  const userIcon = new Icon ({
    iconUrl: pin,
    iconSize: [ 25, 25 ]
  });

const geoLocationOptions = {
  timeout: 1000 * 60 * 1
}

const Mapa = () => {
  const { location, error } = useCurrentLocation(geoLocationOptions)
  console.log({location})
  
  if (error) {
    console.log(`Error de Localizacion: ${error}`)
  }

  return (
    <Fragment>
        <Map center={location ? [location.latitude, location.longitude] : [ 13.4808197, -86.582077 ]} zoom={ 16 }>
          <TileLayer
            url= "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
            attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          { location ? (
            <Marker 
              position = {[ location.latitude, location.longitude ]} 
              icon = { userIcon } 
              onClick = { () => {
                
              }}
            />
          ) : (
            <Marker position = {[ 13.4808197, -86.582077 ]} />
          ) }

        </Map>
    </Fragment>
  )
}

export default Mapa;
