import React, {Component} from 'react'
import ContainerList from '../../Dummy/ContainerList/component.js'
import Filter from '../../Dummy/Filter/component.js'
import './component.sass'

class DummyCountryResultsList extends Component {
    render() {
      let filter = {
        title: 'Countries',
        number: `${this.props.store.length}`
      }
      const filtersCategory = ['Countries','Fields']
        return (
            <div className="result-list-view">
                <div className="center-content">
                  <Filter
                    filter={filter}
                    currentCategory={this.props.currentCategory}
                    category={this.props.category}
                    filtersCategory={filtersCategory}
                    inputString={this.props.inputString}
                    makeSearch={this.props.makeSearch}
                    paramData={this.props.currentParamData}
                    currentParamsQuery={this.props.currentParamsQuery}
                    clearAdvancedFilter={()=>{}}
                  />
                  <ContainerList
                    list="countryList"
                    store={this.props.store}
                  />
                </div>
            </div>
        )
    }
}

export default DummyCountryResultsList
