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

  componentDidMount = () =>{
    this.setState({lat: this.props.lat, lng: this.props.lng, zoom: this.props.zoom})
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

  renderMarkers = () => {
    let markers;
    if(this.props.store.length !== 0){
    markers = this.props.store.map( (item,i) =>{
      return (
          <Marker key={i}  position={[item.lat, item.lon]}>
            <Popup className="popup">
              <span className="popup-content">
                <span className="university-name">{item.name}</span>
                <span className="location-name">{item.formatedAdress}</span>
                <span className="syllabi">{item.syllabus_count}</span>
              </span>
            </Popup>
          </Marker>
        )
      })
    }

    return markers;
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div ref="map" className="container-map">
        <div className="container-header">
          <p className="right-content-title">
            {this.props.title}
          </p>
          <div className="right-content-expand">
            <div className="right-content-expand-button">
              <ButtonLabel backgroundColor="" color="#85919F" border="1px solid #E8E8E8" title="580,500 unattributed"/>
            </div>
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
            url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
          />
          {this.renderMarkers()}
        </Map>
      </div>

    );
  }
}

export default MapComponent
