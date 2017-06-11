import React, {Component} from 'react'
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import BadgesList from '../../Dummy/Lists/BadgesList/component.js'
import MostFrecuentlyAssignedTextList from '../../Dummy/Lists/MostFrecuentlyAssignedTextList/component.js'
import Map from '../../Dummy/Map/component.js'
import BarChart from '../../Dummy/BarChart/component.js'
import images from './Amherst_College.png'

class InstitutionResult extends Component {

    render() {
      let store = this.props.store,
          image = store.image || images;
        return (
          <div className="result-view">
            <div className="result-view-content">
              <div className="title-view">
                <ButtonLabel title="SCHOOLS" backgroundColor="#9BD331" border="" color="#FFFFFF"/>
                <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
              </div>
              <div className="left-content">
                <div className="title-view">
                  <img src={image} alt="author"/>
                  <p>
                    {store.name}
                  </p>
                </div>

                <p className="description">
                  {store.school_description}
                </p>
                <div className="buttons-label">
                  <ButtonLabel title={`${store.syllabi.total} SYLLABI`} backgroundColor="#3188D3" color="#FFFFFF" border=""/>
                </div>
                <div className="badge">
                  <BadgesList
                    store={store.syllabi.by_field}
                    type={1}
                    router={this.props.router}
                    id_institution={store._id}
                    id_country={""}
                  />
                  <p className="legend-badge">
                    <span></span>
                    More than 250 Syllabi, click for more info
                  </p>
                </div>
                <div className="most-taught-texts-overall">
                  <MostFrecuentlyAssignedTextList store={store.most_frecuently_assigned_texts}/>
                </div>
              </div>

              <aside className="right-content">
                <div className="institution-container-map">
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
                  store={store.top_fields_by_year.data}
                  isNormalizable={true}
                  getDataNormalizedOrRAW={this.props.getDataNormalizedOrRAW}
                />
              </aside>
            </div>
          </div>
        )
    }
}

export default InstitutionResult
