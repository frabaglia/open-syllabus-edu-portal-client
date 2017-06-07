import React, {Component} from 'react'
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import ContainerTopRankedList from '../../Dummy/ContainerTopRankedList/component.js'
import Map from '../../Dummy/Map/component.js'
import BarChart from '../../Dummy/BarChart/component.js'

class DummyFieldResult extends Component {
    render() {
        return (
          <div className="result-view">
              <div className="result-view-content">
                <div className="title-view">
                  <ButtonLabel title="FIELDS" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                  <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                  <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                </div>
                <div className="left-content">
                  <p className="title-view">
                    English
                  </p>
                  <div className="top-ranked">
                    <div>

                    </div>
                    <ContainerTopRankedList/>
                  </div>
                </div>

                <aside className="right-content">
                  <div className="field-container-map">
                    <Map/>
                  </div>
                  <BarChart title={"Top Titles by Year"} legend={false}/>
                </aside>
              </div>
          </div>
        )
    }
}

export default DummyFieldResult
