import React, {Component} from 'react'
import {Link} from 'react-router'
import './component.sass'
import ButtonDropdown from '../../Dummy/ButtonDropdown/component.js'
import SVGMenuMobile from '../SVG/MenuMobile/component.js'
import SVGCloseMobile from '../SVG/CloseMobile/component.js'
import SVGFacebookLogo from '../SVG/FacebookLogo/component.js'
import SVGGithubLogo from '../SVG/GithubLogo/component.js'
import SVGTwitterLogo from '../SVG/TwitterLogo/component.js'
import SVGSyllabusLogo from '../SVG/SyllabusLogo/component.js'
import $ from 'jquery'

class NavBar extends Component {

  constructor(){
    super();
    this.state = {
      openMenu: false,
    }
  }

  componentDidMount()
  {
    $(window).click( (event) => {
      if (event.target.id !== 'menuContent' && this.refs.btnmenu.className === 'btnmenu-close' && this.refs.menuContent.className === 'menu-content-mobile'){
        this.setState({openMenu:false}, () => {this.refs.menuContent.className = "menu-content"})
      }
    })

    if(this.props.router.location.pathname === '/') this.refs.home.className = 'home-active'
    else this.refs.home.className = ''
  }

  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.router.location.pathname === '/') this.refs.home.className = 'home-active'
    else this.refs.home.className = ''
  }

  handleMenuMobile = (e) =>
  {
    e.stopPropagation();
    let open = false;
    if(this.refs.menuContent !==  undefined){
      if(this.refs.menuContent.className === "menu-content") {
        this.refs.menuContent.className = "menu-content-mobile";
        open = true;
        this.refs.btnmenu.className = "btnmenu-close"
      }
      else {
        this.refs.menuContent.className = "menu-content";
        this.refs.btnmenu.className = "btnmenu-open"
      }
      this.setState({openMenu:open});
    }
  }

  ShowBtnMenu = () =>
  {
    let btn = (<SVGMenuMobile click={this.handleMenuMobile}/>);
    if(this.state.openMenu) btn = (<SVGCloseMobile click={this.handleMenuMobile}/>)
    return btn;
  }

  buttonDropdown = () =>
  {
    let buttonDropdown = (this.props.router.location.pathname.includes('/results-list')) ? (<ButtonDropdown reactRouter={this.props.router}/>) : (<div></div>);

    return buttonDropdown;
  }

  render() {

      return (
        <div className="navbar">
          <div className="syllabus-logo">
            <Link to="/"><SVGSyllabusLogo colorOpenSyllabus="#FFFFFF" colorExplorer="#9BD331"/></Link>
          </div>
          <div className="btndropdown">{this.buttonDropdown()}</div>
          <div className="menu">
            <div ref='menuContent' id='menuContent' className="menu-content">
              <ul>
                <li ref="home" id='menuContent'><Link to="/">Home</Link></li>
                <li id='menuContent'><Link target="_blank" to="http://opensyllabusproject.org/">Corpus Stats</Link></li>
                <li id='menuContent'><Link target="_blank" to="http://opensyllabusproject.org/faq/">About</Link></li>
                <li id='menuContent'><Link target="_blank" to="http://opensyllabusproject.org/">Blog</Link></li>
                <li id='menuContent'><Link target="_blank" to="http://opensyllabusproject.org/contact-the-osp/">Contact</Link></li>
                <li id='menuContent'><Link target="_blank" to="http://opensyllabusproject.org/share-syllabi-with-the-osp/">Share Syllabi</Link></li>
              </ul>
              <div className="social" id='menuContent'>
                <Link target="_blank" to="https://www.facebook.com/opensyllabusproject/">
                  <SVGFacebookLogo colorOval='#9BD331' colorShape='#FFFFFF'/>
                </Link>
                <Link target="_blank" to="https://twitter.com/opensyllabus">
                  <SVGTwitterLogo colorOval='#9BD331' colorShape='#FFFFFF'/>
                </Link>
                <Link target="_blank" to="https://github.com/davidmcclure/open-syllabus-project">
                  <SVGGithubLogo colorOval='#9BD331' colorShape='#FFFFFF'/>
                </Link>
              </div>
            </div>
            <div ref="btnmenu" id='menuContent' className="btnmenu-open" >
              {this.ShowBtnMenu()}
            </div>
          </div>

        </div>
      )
  }
}

export default NavBar
