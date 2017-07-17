import React, {Component} from 'react'
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import BadgesList from '../../Dummy/Lists/BadgesList/component.js'
import AuthorTitlesList from '../../Dummy/Lists/AuthorTitlesList/component.js'
// import BarChart from '../../Dummy/BarChart/component.js'
import images from './Fredric_Jameson.png'

class DummyAuthorResult extends Component {

  state = {
    BarChart: null
  }

  componentDidMount = async () =>{

    const {default: BarChart} = await import('../../Dummy/BarChart/component.js')
    this.setState({BarChart:
      <BarChart
        title={"Top Titles by Year"}
        legend={false}
        store={this.props.store.top_titles_by_year.data}
        isNormalizable={false}
        getDataNormalizedOrRAW={this.props.getDataNormalizedOrRAW}
      />
    })
  }

    render() {
      let store = this.props.store,
          first_name = store.author_first || '',
          middle_name = store.author_middle || '',
          last_name = store.author_last || '',
          image = store.image || images;
        return (
          <div className="result-view">
            <div className="result-view-content">
              <div className="title-view">
                <ButtonLabel title="AUTHORS" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
              </div>
              <div className="left-content">
                <div className="title-view">
                  <img src={image} alt="author"/>
                  <p>
                    {`${first_name} ${middle_name} ${last_name}`}
                  </p>
                </div>

                <p className="description">
                  {store.author_description}
                </p>
                <div className="buttons-label">
                  <ButtonLabel title={`APPEARANCES ${store.appearences.total}`} backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                </div>
                <div className="badge-list-component">
                  <p className="badge-list-component-title">Appearances by field</p>
                  <BadgesList store={store.appearences.by_field} type={0}/>
                </div>
                <div className="author-titles">
                  <AuthorTitlesList store={store.author_titles}/>
                </div>
              </div>

              <aside className="right-content">
                <div className="barchart-component">
                  {this.state.BarChart || <div></div>}
                </div>
              </aside>
            </div>
          </div>
        )
    }
}

export default DummyAuthorResult
