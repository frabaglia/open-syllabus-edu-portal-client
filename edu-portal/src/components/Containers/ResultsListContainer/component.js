import React, {Component} from 'react'
import './component.sass'

class ResultsListContainer extends Component {
    render() {
        return (
            <div className="result-list-container">
              {this.props.children}
            </div>
        )
    }
}

export default ResultsListContainer
