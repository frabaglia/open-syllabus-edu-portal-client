import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import AutorList from '../../Dummy/Lists/AuthorList/component'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import './component.sass'

const autorList = [{
  "_id": 51,
  "author_first": "Neil",
  "author_middle": null,
  "author_last": "Cambell",
  "rank": 1,
  "appearences": {
      "total": 4000
  },
  "text_count": 20,
  image:null
},
{
  "_id": 51,
  "author_first": "Neil",
  "author_middle": null,
  "author_last": "Cambell",
  "rank": 1,
  "appearences": {
      "total": 4000
  },
  "text_count": 20,
  image:null
},
{
  "_id": 51,
  "author_first": "Neil",
  "author_middle": null,
  "author_last": "Cambell",
  "rank": 1,
  "appearences": {
      "total": 4000
  },
  "text_count": 20,
  image:null
},
{
  "_id": 51,
  "author_first": "Neil",
  "author_middle": null,
  "author_last": "Cambell",
  "rank": 1,
  "appearences": {
      "total": 4000
  },
  "text_count": 20,
  image:null
},
{
  "_id": 51,
  "author_first": "Neil",
  "author_middle": null,
  "author_last": "Cambell",
  "rank": 1,
  "appearences": {
      "total": 4000
  },
  "text_count": 20,
  image:null
}]


class AuthorResultsList extends Component {

    render() {
      let store = this.props.store;
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
                      count: 4500,
                      subtitle:''
                    })}
                  </div>
                </div>
              </div>
              <div className="content-container">
                <AutorList store={autorList}/>
              </div>
            </div>
        )
    }
}

export default AuthorResultsList
