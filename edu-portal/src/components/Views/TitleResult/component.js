import React, {Component} from 'react'
import {Link} from 'react-router';
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import BadgesList from '../../Dummy/Lists/BadgesList/component.js'
import TextAssignedList from '../../Dummy/Lists/TextAssignedList/component.js'
import SeeTheTextOnSyllabiList from '../../Dummy/Lists/SeeTheTextOnSyllabiList/component.js'
import BarChart from '../../Dummy/BarChart/component.js'
import Map from '../../Dummy/Map/component.js'


class DummyTitleResult extends Component {



    render() {
      let store = this.props.store,
          first_name = store.author.author_first || '',
          middle_name = store.author.author_middle || '',
          last_name = store.author.author_last || '';
        return (
            <div className="result-view">
                <div className="result-view-content">
                  <div className="title-view">
                    <ButtonLabel title="TITLES" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                    <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                    <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                  </div>
                  <div className="left-content">
                    <p className="title-view">
                      {store.title}
                    </p>
                    <p className="author-view">
                      <Link to={{
                        pathname: "/result/author",
                        query: {id:store.author._id}
                      }}>
                        {`${first_name} ${middle_name} ${last_name}`}
                      </Link>
                    </p>
                    <p className="editorial">
                      <Link to={{
                        pathname: "/result/publisher",
                        query: {id:store.publisher._id}
                      }}>
                        {`${store.publisher.name}, ${store.pub_year}`}
                      </Link>
                    </p>
                    <p className="description">
                      {store.title_description}
                    </p>
                    <div className="buttons-label">
                      <ButtonLabel title={`RANK ${store.rank}`} backgroundColor="#3188D3" color="#FFFFFF" border=""/>
                      <ButtonLabel title={`APPEARANCES ${store.appearences.total}`} backgroundColor="#A9B4C0" color="#FFFFFF" border=""/>
                      <ButtonLabel title={`SCORE ${store.score}`} backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                    </div>
                    <div className="badge">
                      <BadgesList store={store.appearences.by_field} type={0}/>
                    </div>
                    <div className="text-assigned">
                      <p className="text-assigned-discription">Texts assigned with <span>{`${store.title}:`}</span></p>
                      <TextAssignedList store={store.textAssignedWith}/>
                    </div>
                  </div>

                  <aside className="right-content">
                    <div className="availability">
                      <p>
                        Availability
                      </p>
                      <p>
                        Open Version:
                        <span>
                          <Link target="_blank" to="#">
                            {store.availability.openVersion.title}
                          </Link>
                        </span>
                      </p>
                      <p>
                        Via Your Institution:
                        <span>
                          <Link target="_blank" to="#" >
                            {store.availability.viaYourInstitution.title}
                          </Link>
                        </span>
                      </p>
                    </div>
                    <div className="text-syllabi">
                      <SeeTheTextOnSyllabiList store={store.seeTheTextOn}/>
                    </div>
                    <Map
                      title={'Syllaby Map'}
                      lat={store.country_map.initialPosition.lat}
                      lng={store.country_map.initialPosition.lng}
                      zoom={store.country_map.initialPosition.zoom}
                      store={store.country_map.data}
                    />
                    <BarChart
                      title={"Top Field by Year"}
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

export default DummyTitleResult
