import React, {Component} from 'react'
import './component.sass'


class ButtonBadge extends Component {

  sendTo = () =>{
      if(this.props.id_field !== ""){
        this.props.router.push({
          pathname: '/university-portal/field-year',
          query: { _id_field: 20, _id_year: 10}
        })
      }
  }

  render() {
      return (
        <div className="btnBadgeYear" onClick={this.sendTo}>
            <span className="years">{this.props.year}</span>
            <span className="count">{this.props.count}</span>
        </div>
      )
  }
}

export default ButtonBadge
