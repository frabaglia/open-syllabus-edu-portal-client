import React, {Component} from 'react';
import './component.sass';
import SyllabiItemList from '../../ItemList/SyllabiItemList/component.js';
import SyllabiPreviewWrapper from '../../SyllabiPreviewWrapper/component.js';

class SyllabiList extends Component {

  constructor(){
    super();
    this.state = {
      syllabiPreviewWrapperID: 0
    }
  }

  isOpen = (id) => (this.state.syllabiPreviewWrapperID === id) ? this.setState({syllabiPreviewWrapperID:""}) : this.setState({syllabiPreviewWrapperID:id})



  renderSyllabiItemList = () =>
  {
    let SyllabiItemsList = [];
    if(this.props.store !== []) {

      this.props.store.map ( (item, i) => {
        let open = false
        if(i === this.state.syllabiPreviewWrapperID) open = true
        SyllabiItemsList.push(
          <li key={i}>
            <SyllabiPreviewWrapper
              data={item.dataWrapper}
              open={open}
              _syllabiPreviewWrapperID={this.isOpen}
              id={i}
              >
              <SyllabiItemList objectItem={item.data} isInstructorEmails={this.props.isInstructorEmails}/>
            </SyllabiPreviewWrapper>
          </li>
        )
      });
    }

    return SyllabiItemsList;
  }

  render() {
      return (
        <div className="syllabi-list">
          <ul>
            {this.renderSyllabiItemList()}
          </ul>
        </div>
      )
  }
}

export default SyllabiList
