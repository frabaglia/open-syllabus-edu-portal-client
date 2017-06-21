import React, {Component} from 'react'
import './component.sass'

import ButtonBadge from '../../Buttons/ButtonBadge/component.js'


class BadgesList  extends Component {

  renderBadges = () =>
  {
    let badgeList = []
    this.props.store.map( (badge, i) =>{
      badgeList.push(
        <ButtonBadge
          key={i}
          title={badge.name}
          count={badge.syllabus_count}
          router={this.props.router}
          id_field={badge._id}
        />)
    })
    return badgeList;
  }

  render() {
      return (
        <div className="badges-list">
          <div className="badges">
            {this.renderBadges()}
          </div>
        </div>
      )
  }
}

export default BadgesList
