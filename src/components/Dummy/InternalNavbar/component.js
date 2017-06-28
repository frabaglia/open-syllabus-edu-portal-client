import React, {Component} from 'react'
import './component.sass'
import ButtonRegular from '../Buttons/ButtonRegular/component.js'

class InternalNavbar extends Component {

  constructor(props){
    super();
    this.state = {
      fullTextsSelected: false,
      titlesSelected: false,
      authorstSelected: false,
      instructorEmailsSelected: false,
    }
  }

  styleSelected = (buttonName) =>{
    let backgroundColor = '#C8CFD7';
    switch (buttonName) {
      case 'FULLTEXTS':
        if(this.state.fullTextsSelected) backgroundColor = '#9BD331';
        break;
      case 'TITLES':
        if(this.state.titlesSelected) backgroundColor = '#9BD331';
        break;
      case 'AUTHORS':
        if(this.state.authorstSelected) backgroundColor = '#9BD331';
        break;
      case 'INSTRUCTOREMAILS':
        if(this.state.instructorEmailsSelected) backgroundColor = '#9BD331';
        break;
      default:
    }
    return backgroundColor
  }

  componentDidMount = () => {
  }

  isButtonSelected = (buttonName) =>{
    switch (buttonName) {
      case 'Full Text':
        if(!this.state.fullTextsSelected){
          this.setState({fullTextsSelected:true, titlesSelected:false, authorstSelected:false, instructorEmailsSelected:false }
          //   , ()=>{
          //   console.log(this.props);
          //   this.props.router.router.push('result-list/full-texts')
          // }
        )
        }
        break;
      case 'Titles':
      if(!this.state.titlesSelected){
        this.setState({fullTextsSelected:false, titlesSelected:true, authorstSelected:false, instructorEmailsSelected:false }
          // , ()=>{
          // this.props.router.router.push({
          //   pathname: 'result-list/titles',
          //   // state: {  tournament: torneo,
          //   //           dataTournament: tournament
          //   //  },
          // })}
        )
      }
        break;
      case 'Authors':
      if(!this.state.authorstSelected){
        this.setState({fullTextsSelected:false, titlesSelected:false, authorstSelected:true, instructorEmailsSelected:false })
      }
        break;
      case 'Instructor Emails':
      if(!this.state.instructorEmailsSelected){
        this.setState({fullTextsSelected:false, titlesSelected:false, authorstSelected:false, instructorEmailsSelected:true })
      }
        break;
      default:
    }
  }

  render() {
      return (
        <div className="internal-navbar">
          <ButtonRegular title={'Full Text'} click={this.isButtonSelected} selected={this.styleSelected('FULLTEXTS')}/>
          <ButtonRegular title={'Titles'} click={this.isButtonSelected} selected={this.styleSelected('TITLES')}/>
          <ButtonRegular title={'Authors'} click={this.isButtonSelected} selected={this.styleSelected('AUTHORS')}/>
          <ButtonRegular title={'Instructor Emails'} click={this.isButtonSelected} selected={this.styleSelected('INSTRUCTOREMAILS')}/>
        </div>
      )
  }
}

export default InternalNavbar
