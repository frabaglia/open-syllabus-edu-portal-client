import React, {Component} from 'react'
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import BadgesList from '../../Dummy/Lists/BadgesList/component.js'
import AuthorTitlesList from '../../Dummy/Lists/AuthorTitlesList/component.js'
import BarChart from '../../Dummy/BarChart/component.js'
import Map from '../../Dummy/Map/component.js'
import images from './Fredric_Jameson.png'

class DummyAuthorResult extends Component {
    render() {
      let store = this.props.store,
          first_name = store.author_first || '',
          middle_name = store.author_middle || '',
          last_name = store.author_last || '',
          image = store.image || images;
        return (
          <div className="result-view">
            <div className="result-view-content">
              <div className="title-view">
                <ButtonLabel title="AUTHORS" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
              </div>
              <div className="left-content">
                <div className="title-view">
                  <img src={image} alt="author"/>
                  <p>
                    {`${first_name} ${middle_name} ${last_name}`}
                  </p>
                </div>

                <p className="description">
                  {store.author_description}
                </p>
                <div className="buttons-label">
                  <ButtonLabel title={`APPEARANCES ${store.appearences.total}`} backgroundColor="#A9B4C0" color="#FFFFFF" border=""/>

                </div>
                <div className="badge">
                  <BadgesList store={store.appearences.by_field} />
                </div>
                <div className="author-titles">
                  <AuthorTitlesList store={store.author_titles}/>
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

export default DummyAuthorResult
