import React, {Component} from 'react'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {saveState} from '../../../utils/SyllabusLocalStorage/component'

//----------------------- SMART COMPONENTS ----------------------------------
import SmartLanding from '../../Smart/Landing/component.js'
// import SmartTitleResultsList from '../../Smart/TitleResultsList/component.js'
// import SmartAuthorResultsList from '../../Smart/AuthorResultsList/component.js'
// import SmartFieldResultsList from '../../Smart/FieldResultsList/component.js'
// import SmartInstitutionResultsList from '../../Smart/InstitutionResultsList/component.js'
// import SmartCountryResultsList from '../../Smart/CountryResultsList/component.js'
// import SmartPublisherResultsList from '../../Smart/PublisherResultsList/component.js'
// import SmartTitleResult from '../../Smart/TitleResult/component.js'
// import SmartAuthorResult from '../../Smart/AuthorResult/component.js'
// import SmartFieldResult from '../../Smart/FieldResult/component.js'
// import SmartPublisherResult from '../../Smart/PublisherResult/component.js'
// import SmartCountryResult from '../../Smart/CountryResult/component.js'
// import SmartInstitutionResult from '../../Smart/InstitutionResult/component.js'
// import SmartInstitutionFieldResult from '../../Smart/InstitutionFieldResult/component.js'
// import SmartCountryFieldResult from '../../Smart/CountryFieldResult/component.js'
//-----------------------------END SMART COMPONENTS-----------------------------------

//-----------------------------CONTAINERS-----------------------------------
import ResultContainer from '../../../components/Containers/ResultContainer/component.js'
import ResultsListContainer from '../../../components/Containers/ResultsListContainer/component.js'
import UIContainer from '../../../components/Containers/UIContainer/component.js'
//-----------------------------END CONTAINERS-----------------------------------

//-----------------------------COMPONENTS-----------------------------------
import Filter from '../../Dummy/Filter/component.js'
import store from '../../../store/index.js'
//-----------------------------END COMPONENTS-----------------------------------

/********************************************************/
/* localStorage : Persisting fetched data on local DB   */
/********************************************************/

store.subscribe(() => {
    saveState(store.getState())
}, 10000)

/********************************************************/
/* history : Custom sync Immutable + React-router-redux */
/********************************************************/

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState(state) {
        return state.get('routing').toObject();
    }
});

history.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === 'POP') {
      return;
    }
    // In all other cases, check fragment/scroll to top
    var hash = window.location.hash;
    if (hash) {
      var element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({block: 'start', behavior: 'smooth'});
      }
    } else {
     window.scrollTo(0, 0);
    }
  });
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={UIContainer}>
                        <IndexRoute component={SmartLanding}/>
                        <Route path="search" component={ResultContainer}>
                            {/* <Route path="title" component={SmartTitleResult}/>
                            <Route path="author" component={SmartAuthorResult}/>
                            <Route path="field" component={SmartFieldResult}/>
                            <Route path="school" component={SmartInstitutionResult}/>
                            <Route path="country" component={SmartCountryResult}/>
                            <Route path="publisher" component={SmartPublisherResult}/>
                            <Route path="school-field" component={SmartInstitutionFieldResult}/>
                            <Route path="country-field" component={SmartCountryFieldResult}/> */}
                        </Route>
                        <Route path="university-portal" component={ResultsListContainer}>
                            {/* <Route path="title" component={SmartTitleResultsList}/>
                            <Route path="author" component={SmartAuthorResultsList}/>
                            <Route path="field" component={SmartFieldResultsList}/>
                            <Route path="school" component={SmartInstitutionResultsList}/>
                            <Route path="country" component={SmartCountryResultsList}/>
                            <Route path="publisher" component={SmartPublisherResultsList}/> */}
                        </Route>
                        <Route path="component" component={Filter}/>
                        <Route path="*" component={SmartLanding}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default App
