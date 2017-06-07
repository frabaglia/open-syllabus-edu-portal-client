import React, {Component} from 'react'
import './component.sass'

import ButtonBadge from '../../Buttons/ButtonBadge/component.js'


class BadgesList  extends Component {

  renderBadges = () =>
  {
    let badgeList = []
    this.props.store.map( (badge, i) =>{
      badgeList.push( <ButtonBadge key={i} title={badge.title} count={badge.count} type={this.props.type}/>)
    })
    return badgeList;
  }
  render() {
      return (
        <div className="badges-list">
          <p>
            Appearances by field
          </p>
          <div className="badges">
            {this.renderBadges()}
          </div>
        </div>
      )
  }
}

export  default BadgesList
