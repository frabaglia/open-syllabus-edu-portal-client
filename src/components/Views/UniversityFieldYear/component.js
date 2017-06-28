import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import SyllabiList from '../../Dummy/Lists/SyllabiList/component'
import './component.sass'

const syllabi = [
  {
    data: {
      rank: 1,
      title:{
        titleName: 'More Sons About Buildings and Food',
        titleEmail: 'asd@gmail.com'
      }
    },
    dataWrapper: {
      field: 'Architecture',
      year: 'Spring 2010',
      title: "More Sons About Buildings and Food",
      email: 'asd@gmail.com'
    }
  },
  {
    data: {
      rank: 1,
      title:{
        titleName: 'More Sons About Buildings and Food',
        titleEmail: 'asd@gmail.com'
      }
    },
    dataWrapper: {
      field: 'History',
      year: 'Spring 2010',
      title: "More Sons About Buildings and Food",
      email: 'asd@gmail.com'
    }
  },
  {
    data: {
      rank: 1,
      title:{
        titleName: 'More Sons About Buildings and Food',
        titleEmail: 'asd@gmail.com'
      }
    },
    dataWrapper: {
      field: 'Math',
      year: 'Spring 2010',
      title: "More Sons About Buildings and Food",
      email: 'asd@gmail.com'
    }
  },
]

class UniversityFieldYear extends Component {



    render() {
      let store = this.props.store;
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
                      <Filter/>
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
                  <SyllabiList store={syllabi}/>
                </div>
                <div className="right-side">

                </div>
              </div>
            </div>
        )
    }
}

export default UniversityFieldYear
