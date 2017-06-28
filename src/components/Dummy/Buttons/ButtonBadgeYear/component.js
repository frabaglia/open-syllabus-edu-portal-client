import React, {Component} from 'react'
import './component.sass'


class ButtonBadge extends Component {

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
        <div className="btnBadgeYear" onClick={this.sendTo}>
            <span className="years">{this.props.year}</span>
            <span className="count">{this.props.count}</span>
        </div>
      )
  }
}

export default ButtonBadge
