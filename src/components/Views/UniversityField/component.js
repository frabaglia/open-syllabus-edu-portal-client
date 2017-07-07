import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import SyllabyAvailableByYear from '../../Dummy/SyllabiAvailableByYearContainer/component'
import CloestPeerTeachingProfiles from '../../Dummy/CloestPeerTeachingProfilesContainer/component'
import ContainerTopRankedList from '../../Dummy/ContainerTopRankedList/component'
import BarChart from '../../Dummy/BarChart/component.js'
import LineChart from '../../Dummy/LineChart/component.js'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'

import './component.sass'

const data = [
  {
    name: '1977-1979',
    'Professional men': 2,
    'Professional women': 5,
    'Middle-income men': 20,
    'Middle-income women': 15,
    'Low-income women': 50,
    'Low-income men': 10,
  },
  {
    name: '1979-1981',
    'Professional men': 7,
    'Professional women': 10,
    'Middle-income men': 20,
    'Middle-income women': 60,
    'Low-income women': 50,
    'Low-income men': 10,
  },
  {
    name: '1981-1983',
    'Professional men': 9,
    'Professional women': 15,
    'Middle-income men': 20,
    'Middle-income women': 50,
    'Low-income women': 50,
    'Low-income men': 10,
  },
  {
    name: '1983-1985',
    'Professional men': 12,
    'Professional women': 20,
    'Middle-income men': 20,
    'Middle-income women': 40,
    'Low-income women': 50,
    'Low-income men': 10,
  },
  {
    name: '2010-2012',
    'Professional men': 20,
    'Professional women': 40,
    'Middle-income men': 20,
    'Middle-income women': 10,
    'Low-income women': 50,
    'Low-income men': 10,
  },
  {
    name: '2012-2014',
    'Professional men': 25,
    'Professional women': 35,
    'Middle-income men': 20,
    'Middle-income women': 20,
    'Low-income women': 50,
    'Low-income men': 10,
  },
  {
    name: '2014-2016',
    'Professional men': 30,
    'Professional women': 30,
    'Middle-income men': 20,
    'Middle-income women': 30,
    'Low-income women': 50,
    'Low-income men': 10,
  },
  {
    name: '2016-2018',
    'Professional men': 25,
    'Professional women': 25,
    'Middle-income men': 20,
    'Middle-income women': 40,
    'Low-income women': 50,
    'Low-income men': 10,
  },
];

class UniversityField extends Component {



    render() {
      let store = this.props.store;
        return (
            <div className="university-field">
              <div className="search-view-header">
                <div className="search-view-header-title">
                  <span className="third-color small-font-size">University Portal</span>
                  <p className="large-font-size font-bold">Columbia University: Architecture</p>
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
                      count: 438,
                      subtitle:'Architecture'
                    })}
                  </div>
                </div>
              </div>
              <div className="content-container">
                <div className="left-side">
                  <div className="syllabi-available-by-year-component">
                    <SyllabyAvailableByYear
                      store={store.syllabyAvailableByYear}
                      router={this.props.router}
                    />
                  </div>
                  <div className="closest-peer-teaching-profiles-component">
                    <CloestPeerTeachingProfiles
                      store={store.closestPeerTeachingProfiles}
                    />
                  </div>
                  <div className="most-frequently-assigned-text-component">
                    <ContainerTopRankedList
                      store={store.topRanked}
                      navigation={true}
                      defaultListType={"Columbia"}
                      listTypes={["Columbia","All Schools"]}
                      _makeRequest={this.props._makeRequest}
                    />
                  </div>
                </div>
                <div className="right-side">
                  <div className="bar-chart-component">
                    <BarChart
                      title={"Syllabi by Field and Year"}
                      legend={false}
                      store={store.fieldChart}
                      isNormalizable={false}
                      getDataNormalizedOrRAW={"Normalized"}
                    />
                  </div>
                  <div className="line-chart-component">
                    <LineChart
                      data={data}
                    />
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default UniversityField
