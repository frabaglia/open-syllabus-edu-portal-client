import React, {Component} from 'react'

class ExpandCloseIcon extends Component {

  render() {

      return (
        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={this.props.click} style={{cursor:'pointer'}}>
            <g id="Visual-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-8">
                    <g id="Group-26">
                        <g id="Group-2">
                            <rect id="Rectangle-3" fill="#C8CFD7" x="0" y="0" width="32" height="32" rx="16"></rect>
                            <g id="Group" transform="translate(11.000000, 11.000000)" fill="#FFFFFF">
                                <path d="M8.37190179,9.72066251 C8.74435178,10.0931125 9.34821252,10.0931125 9.72066251,9.72066251 C10.0931125,9.34821252 10.0931125,8.74435178 9.72066251,8.37190179 L1.62809821,0.279337491 C1.25564822,-0.0931124969 0.651787478,-0.0931124969 0.279337491,0.279337491 C-0.0931124969,0.651787478 -0.0931124969,1.25564822 0.279337491,1.62809821 L8.37190179,9.72066251 Z" id="Path-2"></path>
                                <path d="M0.279337491,8.37190179 C-0.0931124969,8.74435178 -0.0931124969,9.34821252 0.279337491,9.72066251 C0.651787478,10.0931125 1.25564822,10.0931125 1.62809821,9.72066251 L9.72066251,1.62809821 C10.0931125,1.25564822 10.0931125,0.651787478 9.72066251,0.279337491 C9.34821252,-0.0931124969 8.74435178,-0.0931124969 8.37190179,0.279337491 L0.279337491,8.37190179 Z" id="Path-2"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      )
  }
}

export default ExpandCloseIcon
