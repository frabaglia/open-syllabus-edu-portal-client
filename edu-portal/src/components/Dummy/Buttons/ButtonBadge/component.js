import React, {Component} from 'react'
import './component.sass'


class ButtonBadge extends Component {

  styleColor = () =>
  {
    let color = "#A9B4C0"
    if(this.props.count >= 250 && this.props.type) color = "#67AAF9";
    return color
  }

  styleCursor = () =>
  {
    let cursor = "default"
    if(this.props.count >= 250 && this.props.type) cursor = "pointer";
    return cursor
  }

  sendTo = () =>{
    if(this.props.count >= 250 && this.props.type){
      console.log(this.props);
      if(this.props.id_institution !== ""){
        this.props.router.push({
          pathname: '/result/school-field',
          query: { id_school:this.props.id_institution,id_field:this.props.id_field}
        })
      }
      else {
        this.props.router.push({
          pathname: '/result/country-field',
          query: { id_school:this.props.id_country,id_field:this.props.id_field}
        })
      }

    }
  }

  render() {
      return (
        <div className="btnBadge" onClick={this.sendTo} style={{cursor: `${this.styleCursor()}`}}>
            <span style={{color: `${this.styleColor()}`}}>{this.props.count} </span>{this.props.title}
        </div>
      )
  }
}

export default ButtonBadge
