import React, {Component} from 'react'
import './component.sass'

class CloestPeerTeachingProfilesContainer  extends Component {

  renderProfiles = () =>
  {
    let badgeList = []
    this.props.store.map( (profiles, i) =>{
      badgeList.push(
        <a href={`${profiles.url}`} target="_blank" key={i}>{profiles.title}</a>
      )
    })
    return badgeList;
  }
  render() {
      return (
        <div className="closest-peer-teaching-profiles">
          <p>
            Closest Peer Teaching Profiles (Last 5 Years)
          </p>
          <div className="profiles">
            {this.renderProfiles()}
          </div>
        </div>
      )
  }
}

export  default CloestPeerTeachingProfilesContainer
