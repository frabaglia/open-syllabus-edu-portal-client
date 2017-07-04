import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import BadgeContainer from '../../Dummy/BadgeContainer/component'
import BarChart from '../../Dummy/BarChart/component.js'
import MostFrecuentlyAssignedTextList from '../../Dummy/Lists/MostFrecuentlyAssignedTextList/component.js'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import './component.sass'

class UniversityLanding extends Component {



    render() {
      let store = this.props.store;
        return (
            <div className="university-landing">
              <div className="search-view-header">
                <div className="search-view-header-title">
                  <span className="third-color small-font-size">University Portal</span>
                  <p className="large-font-size font-bold">Columbia University</p>
                </div>
                <div className="search-view-header-navigation">
                  <div className="internal-navbar-filter-container">
                    <div className="internal-navbar-component">
                      <InternalNavbar router={this.props.router}/>
                    </div>
                    <div className="filter-component">
                      <Filter
                        router={this.props.router}
                      />
                    </div>
                  </div>
                  <div className="filter-syllabi-component">
                    {SyllabiCounter({
                      count: 4500,
                      subtitle:''
                    })}
                  </div>
                </div>
              </div>
              <div className="content-container">
                <div className="left-side">
                  <div className="badge-component">
                    <BadgeContainer
                      router={this.props.router}
                      store={store.universityField}
                      _makeRequest={this.props._makeRequest}
                    />
                  </div>
                  <div className="most-frequently-assigned-text-container">
                    <MostFrecuentlyAssignedTextList
                      store={store.mostFrecuent}
                      title={true}
                      initPagination={3}
                    />
                  </div>
                </div>
                <div className="right-side">
                  <BarChart
                    title={"Syllabi by Field and Year"}
                    legend={false}
                    store={store.fieldChart}
                    isNormalizable={false}
                    getDataNormalizedOrRAW={"Normalized"}
                  />
                </div>
              </div>
            </div>
        )
    }
}

export default UniversityLanding
