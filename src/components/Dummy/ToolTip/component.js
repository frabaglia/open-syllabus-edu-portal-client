import React, {Component} from 'react';
import './component.sass';

class ToolTip extends Component {

  render() {
      return (
        <div className="tooltip">
          {this.props.children}
          <span className="tooltiptext">{this.props.tooltipText}</span>
        </div>
      )
  }
}

export default ToolTip
