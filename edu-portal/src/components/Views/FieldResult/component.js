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
      let store= this.props.store;
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
                    {store.name}
                  </p>
                  <div className="top-ranked">
                    <div>

                    </div>
                    <ContainerTopRankedList
                      store={store.top_ranked}
                      navigation={true}
                      defaultListType={"TITLES"}
                      listTypes={["TITLES","AUTHORS"]}
                    />
                  </div>
                </div>

                <aside className="right-content">
                  <div className="field-container-map">
                    <Map
                      title={'Syllaby Map'}
                      lat={store.country_map.initialPosition.lat}
                      lng={store.country_map.initialPosition.lng}
                      zoom={store.country_map.initialPosition.zoom}
                      store={store.country_map.data}
                    />
                  </div>
                  <BarChart
                    title={"Top Titles by Year"}
                    legend={false}
                    store={store.top_titles_by_year.data}
                    isNormalizable={true}
                    getDataNormalizedOrRAW={this.props.getDataNormalizedOrRAW}
                  />
                </aside>
              </div>
          </div>
        )
    }
}

export default DummyFieldResult
