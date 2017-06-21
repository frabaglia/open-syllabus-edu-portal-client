import React, {Component} from 'react'
import './component.sass'


class ButtonBadge extends Component {

  style = () =>
  {
    let color = "#A9B4C0",
        cursor = "default";
    if(this.props.count >= 250) {
      color = "#9BD331";
      cursor = "pointer";
    }
    return {color:color,cursor:cursor}
  }

  sendTo = () =>{
    if(this.props.count >= 250){
      console.log(this.props);
      console.log('ir a algun lugar');
      // if(this.props.id_field !== ""){
      //   this.props.router.push({
      //     pathname: '/field',
      //     query: { id_school:this.props.id_institution,id_field:this.props.id_field}
      //   })
      // }
    }
  }

  render() {
      return (
        <div className="btnBadge" onClick={this.sendTo} style={{cursor: `${this.style().cursor}`}}>
            <span style={{color: `${this.style().color}`}}>{this.props.count} </span>{this.props.title}
        </div>
      )
  }
}

export default ButtonBadge
