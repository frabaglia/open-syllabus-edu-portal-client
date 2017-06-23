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
    let backgroundColor = '#C8CFD7',
        pathname = this.props.router.location.pathname

    switch (buttonName) {
      case 'FULLTEXTS':
        if(pathname.includes("full-texts")) backgroundColor = '#9BD331';
        break;
      case 'TITLES':
        if(pathname.includes("titles")) backgroundColor = '#9BD331';
        break;
      case 'AUTHORS':
        if(pathname.includes("authors")) backgroundColor = '#9BD331';
        break;
      case 'INSTRUCTOREMAILS':
        if(pathname.includes("instructor-emails")) backgroundColor = '#9BD331';
        break;
      default:
    }
    return backgroundColor
  }

  componentDidMount = () => {
  }

  isButtonSelected = (buttonName) =>{
    let pathname = this.props.router.location.pathname
    switch (buttonName) {
      case 'Full Text':
        if(!pathname.includes("full-texts")) this.props.router.push("/university-portal/result-list/full-texts")
        break;
      case 'Titles':
        if(!pathname.includes("titles")) this.props.router.push("/university-portal/result-list/titles")
        break;
      case 'Authors':
        if(!pathname.includes("authors")) this.props.router.push("/university-portal/result-list/authors")
        break;
      case 'Instructor Emails':
      if(!pathname.includes("instructor-emails")) this.props.router.push("/university-portal/result-list/instructor-emails")
        break;
      default:
    }
  }

  render() {
    console.log(this.props.router);
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
