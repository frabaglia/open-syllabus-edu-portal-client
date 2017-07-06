import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import SyllabyAvailableByYear from '../../Dummy/SyllabiAvailableByYearContainer/component'
import CloestPeerTeachingProfiles from '../../Dummy/CloestPeerTeachingProfilesContainer/component'
import ContainerTopRankedList from '../../Dummy/ContainerTopRankedList/component'
import BarChart from '../../Dummy/BarChart/component.js'
// import LineChart from '../../Dummy/LineChart/component.js'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import './component.sass'

// const lineChartData = [{
//   label: 'Economics',
//   values: [
//     {x: '2010', y: 20},
//     {x: '2016', y: 40},
//   ]
// },
// {
//   label: 'Literature',
//   values: [
//     {x: '2010', y: 0},
//     {x: '2016', y: 30},
//   ]
// }]

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
                    {/* // FIXME:  */}
                    {/* <LineChart
                      title={"Syllabi by Field and Year"}
                      legend={false}
                      store={lineChartData}
                      isNormalizable={false}
                      getDataNormalizedOrRAW={"Normalized"}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default UniversityField
