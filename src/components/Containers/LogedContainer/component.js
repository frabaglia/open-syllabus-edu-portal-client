import React, {Component} from 'react'
import './component.sass'

class LogedContainer extends Component {

    render() {
        return (
          <div className="logged-container">
            <div className="view huge-container">
              <div className="body-view">
                {this.props.children}
              </div>
            </div>
          </div>
        )
    }
}

export default LogedContainer
