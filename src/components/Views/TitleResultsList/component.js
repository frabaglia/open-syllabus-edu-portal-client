import React, {Component} from 'react'
import {Link} from 'react-router';
import Filter from '../../Dummy/Filter/component'
import MostFrecuentlyAssignedTextList from '../../Dummy/Lists/MostFrecuentlyAssignedTextList/component.js'
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
