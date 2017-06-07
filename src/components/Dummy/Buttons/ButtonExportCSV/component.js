import React, {Component} from 'react'
import './component.sass'
import ExportIcon from '../../SVG/ExportIcon/component.js'


class ButtonExportCSV extends Component {

  render() {
      return (
        <button className="btnExportCsv">EXPORT CSV <ExportIcon/></button>
      )
  }
}

export default ButtonExportCSV
