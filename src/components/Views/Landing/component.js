import React, {Component} from 'react'

import './component.sass'

class DummyLanding extends Component {

  render() {
    return (
        <div className="landing">
            <div className="column landing-title">
                <p>
                  This is a short, explicative and super <span>persuasive text</span> for our future potential customers
                </p>
            </div>
            <div className="landing-content">

            </div>
        </div>
    )
  }
}

export default DummyLanding
