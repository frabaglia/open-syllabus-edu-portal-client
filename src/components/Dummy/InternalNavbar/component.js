import React, {Component} from 'react'
import './component.sass'
import ButtonRegular from '../Buttons/ButtonRegular/component.js'

class InternalNavbar extends Component {

  constructor(props){
    super();
    this.state = {
    }
  }

  componentDidMount = () => {
  }

  render() {
      return (
        <div className="internal-navbar">
          <ButtonRegular title={'Full Text'} click={this.isButtonSelected} selected={'#C8CFD7'}/>
          <ButtonRegular title={'Titles'} click={this.isButtonSelected} selected={'#C8CFD7'}/>
          <ButtonRegular title={'Authors'} click={this.isButtonSelected} selected={'#C8CFD7'}/>
          <ButtonRegular title={'Instructor Emails'} click={this.isButtonSelected} selected={'#C8CFD7'}/>
        </div>
      )
  }
}

export default InternalNavbar
