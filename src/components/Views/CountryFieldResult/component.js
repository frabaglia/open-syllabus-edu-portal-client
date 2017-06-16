import React, {Component} from 'react'
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import ContainerTopRankedList from '../../Dummy/ContainerTopRankedList/component.js'
import BarChart from '../../Dummy/BarChart/component.js'

class DummyCountryFieldResult extends Component {

    render() {
      let store = this.props.store;
        return (
          <div className="result-view">
              <div className="result-view-content">
                <div className="title-view">
                  <ButtonLabel title="COUNTRIES/FIELDS" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                  <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                  <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                </div>
                <div className="left-content">
                  <p className="title-view">
                    {store.name}
                  </p>
                  <div className="top-ranked">
                    <div className="top-ranked-header">
                      <p>Top Ranked Titles</p>
                      <ButtonLabel
                        title={`${store.syllabus_count} SYLLABI`} backgroundColor="#67AAF9"
                        color="#FFFFFF"
                        border=""
                      />
                    </div>
                    <ContainerTopRankedList
                      store={store.top_ranked}
                      navigation={false}
                      defaultListType={"TITLES"}
                    />
                  </div>
                </div>

                <aside className="right-content">
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

export default DummyCountryFieldResult
