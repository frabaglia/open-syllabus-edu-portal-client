import React, {Component} from 'react'
import {Link} from 'react-router';
import Filter from '../../Dummy/Filter/component'
import AutorList from '../../Dummy/Lists/AuthorList/component'
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
              <div className="filter-container">
                <Filter/>
                <div className="search-view-syllabi-counter">
                  <p>
                    <span>438</span>
                    Syllabi
                  </p>
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
