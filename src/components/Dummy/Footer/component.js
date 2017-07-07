import React from 'react'
import './component.sass'
import TAACULogo from '../SVG/TAACULogo/component.js'
import OpenSyllabusLogo from '../SVG/OpenSyllabusLogo/component.js'

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-open-syllabus-logo">
          <a href="http://opensyllabusproject.herokuapp.com/" target="_blank">{OpenSyllabusLogo()}</a>
      </div>
      <div className="footer-taacu-logo">
        <a href="http://americanassembly.org/" target="_blank">{TAACULogo()}</a>
      </div>
    </div>
  );
}

export default Footer
