import React from 'react'
import './component.sass'
import TAACULogo from '../SVG/TAACULogo/component.js'
import OpenSyllabusLogo from '../SVG/OpenSyllabusLogo/component.js'

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-open-syllabus-logo">
        {OpenSyllabusLogo()}
      </div>
      <div className="footer-taacu-logo">
        {TAACULogo()}
      </div>
    </div>
  );
}

export default Footer
