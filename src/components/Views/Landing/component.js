import React, {Component} from 'react'
import InternalNavBar from '../../Dummy/InternalNavBar/component'
import NetworkGraph from '../../Dummy/NetworkGraph/component'
import MostFrecuentContainerList from '../../Dummy/MostFrecuentContainerList/component.js'
import Map from '../../Dummy/Map/component.js'
import BarChart from '../../Dummy/BarChart/component.js'
import './component.sass'


class DummyLanding extends Component {

  render() {
    return (
        <div className="landing">
            <div className="column landing-title">
                <p>
                    Mapping the college curriculum acros <span>2,230,117</span> syllabi.
                </p>
            </div>
            <InternalNavBar/>
            <div className="landing-content">
              <div className="left-content">
                <MostFrecuentContainerList
                  router={this.props.router}
                  changeCurrentCategoryType={this.props.changeCurrentCategoryType}
                  currentCategoryType={this.props.currentCategoryType}
                  currentCategoryData={this.props.currentCategoryData}
                />
              </div>
              <div className="right-content">
                <Map/>
                <BarChart title={"Syllabi by Field and Year"} legend={true}/>
                <div className="container-network-graph">
                  <NetworkGraph/>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

export default DummyLanding
