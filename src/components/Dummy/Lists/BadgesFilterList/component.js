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

  renderTitle = () =>{
    let title = null
    if(this.props.paramsList.length !== 0){
      switch (this.props.type) {
        case "FullTexts":
          title = (<p className="badges-filter-list-title font-bold small-font-size">Full Text Search for:</p>)
          break;

        case "Titles":
          title = (<p className="badges-filter-list-title font-bold small-font-size">Search for Titles:</p>)
          break;

        case "Authors":
          title = (<p className="badges-filter-list-title font-bold small-font-size">Search for Authors:</p>)
          break;

        case "InstructorEmails":
          title = (<p className="badges-filter-list-title font-bold small-font-size">Email Search for:</p>)
          break;

        default:
      }
    }
    return title
  }

  render() {
      return (
        <div className="badges-filter-list">
            {this.renderTitle()}
          <div className="badges-filter">
            {this.renderBadges()}
          </div>
        </div>
      )
  }
}

export  default BadgesFilterList
