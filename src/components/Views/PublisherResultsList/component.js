import React, {Component} from 'react'
import ContainerList from '../../Dummy/ContainerList/component.js'
import Filter from '../../Dummy/Filter/component.js'
import './component.sass'
import AdvancedFilter from '../../Dummy/AdvancedFilter/component.js'

class DummyPublisherResultsList extends Component {
  constructor(){
    super();
    this.state= {
      clear: false,
      advancedParamFilter:[],
      regularParamFilter:[]
    }
  }

  clearAdvancedFilter = () =>{
    this.setState({clear:true}, () =>{this.props.currentParamsQuery([])})
    console.log(this.state.clear, 'filtro limpio')
  }

  currentParamAdvancedFilter = (paramList) =>
  {
    console.log(paramList);
    console.log(this.state.clear, 'filtro sucio')
    let filtro = (paramList !== []) ? false : true
    this.setState({
      clear:filtro,
      advancedParamFilter: paramList
    }, () =>{this.mergeParamsFilter()})

  }

  currentParamRegularFilter = (paramList) => this.setState({regularParamFilter:paramList}, () => {this.mergeParamsFilter()})

  mergeParamsFilter = () =>
  {
    let paramQuery;
    paramQuery = this.state.regularParamFilter.concat(this.state.advancedParamFilter);

    paramQuery = paramQuery.filter((thing, index, self) => self.findIndex((t) => {return t.category === thing.category && t._id === thing._id; }) === index)

    this.props.currentParamsQuery(paramQuery);
  }

    render() {
        let filter = {
            title: 'Publishers',
            number: `${this.props.store.length}`
        }
        const filtersCategory = ['Publisher','Field','Country']
        return (
            <div className="result-list-view">
                <aside className="left-content">
                  <AdvancedFilter
                    currentParamsQuery={this.currentParamAdvancedFilter}
                    clearFilter={this.state.clear}
                    full={false}
                  />
                </aside>
                <div className="right-content">
                  <Filter
                    filter={filter}
                    currentCategory={this.props.currentCategory}
                    category={this.props.category}
                    filtersCategory={filtersCategory}
                    inputString={this.props.inputString}
                    makeSearch={this.props.makeSearch}
                    paramData={this.props.currentParamData}
                    currentParamsQuery={this.currentParamRegularFilter}
                    clearAdvancedFilter={this.clearAdvancedFilter}
                  />
                  <ContainerList
                    list="publisherList"
                    store={this.props.store}
                    pagination={this.props.pagination}
                  />
                </div>
            </div>
        )
    }
}

export default DummyPublisherResultsList
