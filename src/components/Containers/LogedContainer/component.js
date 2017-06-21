import React, {Component} from 'react'
import './component.sass'
import InternalNavbar from '../../Dummy/InternalNavbar/component'

class LogedContainer extends Component {

    render() {
      console.log(this.props);
      let universityInfo = this.props.route.universityInfo;
        return (
          <div className="logged-container">
            <div className="view huge-container">
              <div className="search-view">
                <div className="search-view-header">
                  <div className="search-view-header-title">
                    <span>University Portal</span>
                    <p>{universityInfo.name}</p>
                  </div>
                </div>
                <div className="search-view-internal-navbar">
                  <InternalNavbar/>
                </div>
              </div>
              <div className="body-view">
                {this.props.children}
              </div>
            </div>
          </div>
        )
    }
}

export default LogedContainer
