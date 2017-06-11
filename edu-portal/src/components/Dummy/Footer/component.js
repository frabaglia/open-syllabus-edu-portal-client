import React, {Component} from 'react'
import {Link} from 'react-router'
import './component.css'
import SVGFacebookLogo from '../SVG/FacebookLogo/component.js'
import SVGGithubLogo from '../SVG/GithubLogo/component.js'
import SVGTwitterLogo from '../SVG/TwitterLogo/component.js'
import SVGSyllabusLogo from '../SVG/SyllabusLogo/component.js'
import SVGTAACULogo from '../SVG/TAACULogo/component.js'

class Footer extends Component {

  componentDidMount()
  {
    if(this.props.router.location.pathname === '/') this.refs.homeFooter.className = 'home-active-footer'
    else this.refs.homeFooter.className = ''
  }

  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.router.location.pathname === '/') this.refs.homeFooter.className = 'home-active-footer'
    else this.refs.homeFooter.className = ''
  }


  render() {
      return (
        <div className="footer">
          <div className="social-footer">
            <ul>
              <li ref="homeFooter" id='menuContent'><Link to="/">Home</Link></li>
              <li><Link target="_blank" to="http://opensyllabusproject.org/">Corpus Stats</Link></li>
              <li><Link target="_blank" to="http://opensyllabusproject.org/faq/">About</Link></li>
              <li><Link target="_blank" to="http://opensyllabusproject.org/">Blog</Link></li>
              <li><Link target="_blank" to="http://opensyllabusproject.org/contact-the-osp/">Contact</Link></li>
              <li><Link target="_blank" to="http://opensyllabusproject.org/share-syllabi-with-the-osp/">Share Syllabi</Link></li>
            </ul>
            <div>
              <Link target="_blank" to="https://www.facebook.com/opensyllabusproject/">
                <SVGFacebookLogo colorOval='#A9B4C0' colorShape='#FFFFFF'/>
              </Link>
              <Link target="_blank" to="https://twitter.com/opensyllabus">
                <SVGTwitterLogo colorOval='#A9B4C0' colorShape='#FFFFFF'/>
              </Link>
              <Link target="_blank" to="https://github.com/davidmcclure/open-syllabus-project">
                <SVGGithubLogo colorOval='#A9B4C0' colorShape='#FFFFFF'/>
              </Link>
            </div>
          </div>
          <div className="logos-footer">
            <Link to="/">
              <SVGSyllabusLogo colorOpenSyllabus="#85919F" colorExplorer="#85919F"/>
            </Link>
            <Link target="_blank" to="http://americanassembly.org/">
              <SVGTAACULogo/>
            </Link>
          </div>
        </div>
      )
  }
}

export default Footer
