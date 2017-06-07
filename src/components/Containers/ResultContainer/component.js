import React, {Component} from 'react'
import './component.sass'

class ResultContainer extends Component {
    render() {
        return (
          <div className="result-container">
            {this.props.children}
          </div>
        )
    }
}

export default ResultContainer
