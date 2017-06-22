import React, {Component} from 'react'
import {Link} from 'react-router';
import Filter from '../../Dummy/Filter/component'
import './component.sass'

class FullTextResultList extends Component {



    render() {
      let store = this.props.store;
        return (
            <div className="university-field">
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
