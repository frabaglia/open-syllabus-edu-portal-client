import React, {Component} from 'react'
import {Link} from 'react-router';
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import BadgesList from '../../Dummy/Lists/BadgesList/component.js'
import ContainerTopRankedList from '../../Dummy/ContainerTopRankedList/component'
import SeeTheTextOnSyllabiList from '../../Dummy/Lists/SeeTheTextOnSyllabiList/component.js'
// import BarChart from '../../Dummy/BarChart/component.js'
import SVGArrowLeft from '../../Dummy/SVG/ArrowLeft/component.js'


class DummyTitleResult extends Component {

  state = {
    BarChart: null
  }

  componentDidMount = async () =>{

    const {default: BarChart} = await import('../../Dummy/BarChart/component.js')
    this.setState({BarChart:
      <BarChart
        title={"Top Field by Year"}
        legend={false}
        store={this.props.store.top_fields_by_year.data}
        isNormalizable={false}
        getDataNormalizedOrRAW={this.props.getDataNormalizedOrRAW}
      />
    })
  }

    render() {
      let store = this.props.store,
          first_name = store.author.author_first || '',
          middle_name = store.author.author_middle || '',
          last_name = store.author.author_last || '';
        return (
            <div className="result-view">
                <div className="result-view-content">
                  <span className="third-color small-font-size breadcrumb">
                    <Link to="/university-portal/">
                      University Portal
                    </Link>
                    {SVGArrowLeft()}
                    <Link to="/university-portal/result-list/titles">
                      Titles
                    </Link>
                    {SVGArrowLeft()}
                    {store.title}
                  </span>
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
                        pathname: "/university-portal/result/author",
                        query: {id:store.author._id}
                      }}>
                        {`${first_name} ${middle_name} ${last_name}`}
                      </Link>
                    </p>
                    <p className="editorial">
                      <Link to={{
                        // pathname: "/result/publisher",
                        // query: {id:store.publisher._id}
                      }}>
                        {`${store.publisher.name}, ${store.pub_year}`}
                      </Link>
                    </p>
                    <p className="description">
                      {store.title_description}
                    </p>
                    <div className="buttons-label">
                      <ButtonLabel title={`RANK ${store.rank}`} backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                      <ButtonLabel title={`APPEARANCES ${store.appearences.total}`} backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                      <ButtonLabel title={`SCORE ${store.score}`} backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                    </div>
                    <div className="badge-list-component">
                      <p className="badge-list-component-title font-semibold mid-font-size">Appearances by field</p>
                      <BadgesList store={store.appearences.by_field} type={0}/>
                    </div>
                    <div className="text-assigned">
                      <ContainerTopRankedList
                        store={store.topRanked}
                        title={<p className="container-top-ranked-list-title font-semibold mid-font-size">Texts assigned with <span className="font-bold">{`${store.title}:`}</span></p>}
                        isYearSelectable={false}
                        isTextAssigned={true}
                        navigation={true}
                        defaultListType={"Columbia"}
                        listTypes={["Columbia","All Schools"]}
                        _makeRequest={this.props._makeRequest}
                      />
                    </div>
                  </div>

                  <aside className="right-content">
                    <div className="availability">
                      <p className="font-semibold mid-font-size">
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
                    <div className="barchart-component">
                      {this.state.BarChart || <div></div>}
                    </div>
                  </aside>
                </div>
            </div>
        )
    }
}

export default DummyTitleResult
