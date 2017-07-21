import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import MostFrecuentlyAssignedTextList from '../../Dummy/Lists/MostFrecuentlyAssignedTextList/component.js'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import {Link} from 'react-router';
import './component.sass'
import SVGArrowLeft from '../../Dummy/SVG/ArrowLeft/component.js'

class TitleResultsList extends Component {

    render() {
      let store = this.props.store;
        return (
            <div className="title-result-list">
              <div className="search-view-header">
                <div className="search-view-header-title">
                  <span className="third-color small-font-size breadcrumb">
                    <Link to="/university-portal/">
                      University Portal
                    </Link>
                    {SVGArrowLeft()}
                    Titles
                  </span>
                  <Link to="/university-portal">
                    <p className="large-font-size font-bold">Columbia University</p>
                  </Link>
                </div>
                <div className="search-view-header-navigation">
                  <div className="internal-navbar-filter-container">
                    <div className="internal-navbar-component">
                      <InternalNavbar router={this.props.router}/>
                    </div>
                    <div className="filter-component">
                      <Filter
                        filtersCategory={'Titles'}
                        _makeSearch={this.props._makeSearch}
                        router={this.props.router}
                      />
                    </div>
                  </div>
                  <div className="filter-syllabi-component">
                    {SyllabiCounter({
                      count: store.syllbi_count,
                      subtitle:''
                    })}
                  </div>
                </div>
              </div>
              <div className="content-container">
                <div className="left-side">
                  <MostFrecuentlyAssignedTextList
                    store={store.most_frecuently_assigned_texts}
                    title={false}
                    initPagination={6}
                  />
                </div>
                <div className="right-side">
                </div>
              </div>
            </div>
        )
    }
}

export default TitleResultsList
