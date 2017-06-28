import React, {Component} from 'react'
import './component.sass'

import ButtonBadgeYear from '../Buttons/ButtonBadgeYear/component.js'


class SyllabiAvailableByYearContainer  extends Component {

  renderBadgesYear = () =>
  {
    let badgeList = []
    this.props.store.map( (badge, i) =>{
      badgeList.push(
        <ButtonBadgeYear
          key={i}
          year={badge.year}
          count={badge.syllabus_count}
          router={this.props.router}
          id_field={badge._id}
          id_year={badge.id_year}
        />)
    })
    return badgeList;
  }
  render() {
      return (
        <div className="badges-list">
          <p>
            Syllabi Available by Year
          </p>
          <div className="badges">
            {this.renderBadgesYear()}
          </div>
        </div>
      )
  }
}

export  default SyllabiAvailableByYearContainer
