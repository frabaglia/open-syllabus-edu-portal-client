import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
// import SyllabiList from '../../Dummy/Lists/SyllabiList/component'
import MostFrecuentlyAssignedTextList from '../../Dummy/Lists/MostFrecuentlyAssignedTextList/component.js'
import './component.sass'

class UniversityFieldYear extends Component {



    render() {
      let store = this.props.store;
      console.log(store);
        return (
            <div className="university-field">
              <div className="search-view-header">
                <div className="search-view-header-title">
                  <span className="third-color small-font-size">University Portal</span>
                  <p className="large-font-size font-bold">Columbia University: Architecture, 2017</p>
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
                      count: 45,
                      subtitle:'Architecture, 2017'
                    })}
                  </div>
                </div>
              </div>
              <div className="content-container">
                <div className="left-side">
                  <MostFrecuentlyAssignedTextList
                    store={store.mostFrecuent}
                    title={true}
                    initPagination={3}
                  />
                </div>
                <div className="right-side">

                </div>
              </div>
            </div>
        )
    }
}

export default UniversityFieldYear
