import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import MostFrecuentlyAssignedTextList from '../../Dummy/Lists/MostFrecuentlyAssignedTextList/component.js'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import './component.sass'

const most_frecuently_assigned_texts = [
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
]

class TitleResultsList extends Component {



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
                <div className="left-side">
                  <MostFrecuentlyAssignedTextList
                    store={most_frecuently_assigned_texts}
                    title={false}
                    initPagination={6}
                  />
                </div>
                <div className="right-side">
                </div>
              </div>
            </div>
        )
    }
}

export default TitleResultsList
