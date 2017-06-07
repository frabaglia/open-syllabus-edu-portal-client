import React, {Component} from 'react'
import './component.sass'
import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import {Link} from 'react-router'


class NetworkGraph extends Component {

  render() {
      return (
        <div className="network-graph">
          <div className="network-graph-header">
            <p className="network-graph-header-title">The Network <span>GRAPH</span></p>
            <p className="network-graph-header-description">Texts assigned on the same syllabi are clustered together</p>
          </div>
          <div className="network-graph-content">
            <Link target="_blank" to="http://explorer.opensyllabusproject.org/graph">
              <ButtonLabel title="EXPLORE THE GRAPH" backgroundColor="#3188D3" border="" color="#FFFFFF"/>
            </Link>
          </div>
        </div>
      )
  }
}

export default NetworkGraph
