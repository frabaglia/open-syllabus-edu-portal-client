import React from 'react'
import ReactDOM from 'react-dom'
import MapComponent from './component'

const store ={
  initialPosition:{
    lat: 39.73,
    lng: -104.99,
    zoom: 10
  },
  "data": [
    {
      "_id": 55,
      "lat": 39.61,
      "lon": -105.02,
      "name": "FICH - Universidad Nacional del Litoral",
      "formatedAdress": "Santa fe, Santa fe",
      "syllabus_count": 20000
    }]
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <MapComponent
          title={'Syllaby Map'}
          lat={store.initialPosition.lat}
          lng={store.initialPosition.lng}
          zoom={store.initialPosition.zoom}
          store={store.data}
        />, div)
})
