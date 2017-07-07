import React, {Component} from 'react'
import './component.sass'
import image from './preview.jpg'

class SyllabiPreviewWrapper extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  componentDidMount = () => this.setState({open:this.props.open})
  componentWillReceiveProps = (nextProps) => {
    if(this.state.open !== nextProps.open)
    this.setState({open:nextProps.open})
  }

  openPreview = () => this.props._syllabiPreviewWrapperID(this.props.id)

  previewClassName = () => {
    return (this.state.open) ? "preview open-preview" : "preview"
  }

  render() {
      let data = this.props.data;
      return (
        <div className="syllabi-preview-wrapper">
          <div className="children">
            {React.cloneElement(this.props.children, { click: this.openPreview })}
          </div>
          <div className={this.previewClassName()}>
            <div className="preview-image">
              <img src={image} alt="preview"/>
            </div>
            <div className="preview-information">
              <p className="preview-information-field">{data.field}</p>
              <p className="preview-information-year third-color">{data.year}</p>
              <p className="preview-information-title">{data.title}</p>
              <p className="preview-information-email first-color">{data.email}</p>
            </div>
          </div>
        </div>
      )
  }
}

export default SyllabiPreviewWrapper
