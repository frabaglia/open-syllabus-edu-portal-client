import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import AutorList from '../../Dummy/Lists/AuthorList/component'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import './component.sass'

class AuthorResultsList extends Component {

    render() {
      let store = this.props.store;
      console.log(store);
        return (
            <div className="title-result-list">
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
                      count: store.syllabus_count,
                      subtitle:''
                    })}
                  </div>
                </div>
              </div>
              <div className="content-container">
                <AutorList store={store.author_list}/>
              </div>
            </div>
        )
    }
}

export default AuthorResultsList
