import React, {Component} from 'react'
import './component.sass'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import $ from 'jquery'
import ButtonLabel from "../../Dummy/Buttons/ButtonLabel/component.js"
import ExpandIcon from "../../Dummy/SVG/ExpandIcon/component.js"
import ExpandCloseIcon from "../../Dummy/SVG/ExpandCloseIcon/component.js"

class MapComponent extends Component {

  constructor() {
    super();
    this.state = {
      lat: 39.73,
      lng: -104.99,
      zoom: 10,
      expanded: false
    };
  }

  invalidateMap = () => {
      if (this.refs.map1) {
          this.refs.map1.leafletElement.invalidateSize();
      }
  }

  makeFullScreen = () =>
  {
    if(!this.state.expanded) {
      this.refs.map.className = 'expand container-map'
      $('body').css( 'overflow-y', 'hidden');
      $('#mapLeafleat').css( 'height', '100%');
    }
    else {
      this.refs.map.className = 'container-map'
      $('body').css( 'overflow-y', 'scroll');
      $('#mapLeafleat').css( 'height', '400px');
    }
    this.invalidateMap();
    this.setState({expanded:!this.state.expanded})

  }

  renderExpandIcon = () =>  {
    return (!this.state.expanded) ? <ExpandIcon click={this.makeFullScreen}/> : <ExpandCloseIcon click={this.makeFullScreen}/>
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div ref="map" className="container-map">
        <div className="container-header">
          <p className="right-content-title">
            Syllabi Map
          </p>
          <div className="right-content-expand">
            <ButtonLabel backgroundColor="" color="#85919F" border="1px solid #E8E8E8" title="580,500 unattributed"/>
            {this.renderExpandIcon()}
          </div>
        </div>
        <Map
          ref="map1"
          center={position}
          zoom={this.state.zoom}
          id="mapLeafleat"
          onResize={this.invalidateMap}
          >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png'
          />
          <Marker position={[39.61, -105.02]}>
            <Popup className="popup">
              <span className="popup-content">
                <span className="university-name">University of Denver</span>
                <span className="location-name">Denver, United States</span>
                <span className="syllabi">3 syllabi</span>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.74, -104.99]}>
            <Popup className="popup">
              <span className="popup-content">
                <span className="university-name">University of Denver</span>
                <span className="location-name">Denver, United States</span>
                <span className="syllabi">3 syllabi</span>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.73, -104.8]}>
            <Popup className="popup">
              <span className="popup-content">
                <span className="university-name">University of Denver</span>
                <span className="location-name">Denver, United States</span>
                <span className="syllabi">3 syllabi</span>
              </span>
            </Popup>
          </Marker>
          <Marker position={[39.77, -105.23]}>
            <Popup className="popup">
              <span className="popup-content">
                <span className="university-name">University of Denver</span>
                <span className="location-name">Denver, United States</span>
                <span className="syllabi">3 syllabi</span>
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>

    );
  }
}

export default MapComponent
