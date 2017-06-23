import React from 'react'
import './component.sass'

const SyllabiCounter = (props) => {
  this.renderSubtitle = () =>{
    return (props.subtitle !== '') ?
    (<span className="font-bold small-font-size">{props.subtitle}</span>):
    (<div></div>)
  }

  return (
    <div className="search-view-syllabi-counter">
      {this.renderSubtitle()}
      <p className="third-color">
        <span className="first-color">{props.count}</span>
        Syllabi
      </p>
    </div>
  );
}

export default SyllabiCounter
