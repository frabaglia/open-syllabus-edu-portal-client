import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import './component.sass'

class FullTextResultList extends Component {



    render() {
      let store = this.props.store;
        return (
            <div className="university-field">
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
                      <Filter/>
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
                FULL TEXT VIEW
                <div className="left-side">

                </div>
                <div className="right-side">

                </div>
              </div>
            </div>
        )
    }
}

export default FullTextResultList
