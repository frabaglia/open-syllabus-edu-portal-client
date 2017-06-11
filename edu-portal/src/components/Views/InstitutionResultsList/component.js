import React, {Component} from 'react'
import ContainerList from '../../Dummy/ContainerList/component.js'
import Filter from '../../Dummy/Filter/component.js'
import './component.sass'

class DummyInstitutionResultsList extends Component {
    render() {
      let filter = {
        title: 'Schools',
        number: `${this.props.store.length}`
      }
      const filtersCategory = ['School','Field','Country']
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
                    list={"institutionList"}
                    store={this.props.store}
                    pagination={this.props.pagination}
                  />
                </div>
            </div>
        )
    }
}

export default DummyInstitutionResultsList
