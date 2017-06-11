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
          type={this.props.type}
          router={this.props.router}
          id_field={badge._id}
          id_institution={this.props.id_institution}
          id_country={this.props.id_country}
        />)
    })
    return badgeList;
  }
  render() {
      return (
        <div className="badges-list">
          <p>
            Syllabi by field
          </p>
          <div className="badges">
            {this.renderBadges()}
          </div>
        </div>
      )
  }
}

export  default BadgesList
