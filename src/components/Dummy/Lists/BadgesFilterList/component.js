import React, {Component} from 'react'
import './component.sass'

import ButtonBadgeFilter from '../../Buttons/ButtonBadgeFilter/component.js'


class BadgesFilterList  extends Component {

  renderBadges = () =>
  {
    let badgeList = []
    this.props.paramsList.map( (badge, i) =>{
      badgeList.push( <ButtonBadgeFilter click={this.props.eraseParamFromQuery} key={i} title={badge.name} id={badge._id} category={badge.category}/>)
    })
    return badgeList;
  }
  render() {
      return (
        <div className="badges-filter-list">
          <div className="badges-filter">
            {this.renderBadges()}
          </div>
        </div>
      )
  }
}

export  default BadgesFilterList
