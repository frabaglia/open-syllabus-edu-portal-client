import React, {Component} from 'react'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {saveState} from '../../../utils/SyllabusLocalStorage/component'

//-----------------------------VIEWS -----------------------------------
//----------------------------- DUMMY RESULT ---------------------------------


// import TitleResult from '../../Views/TitleResult/component.js'
// import AuthorResult from '../../Views/AuthorResult/component.js'
// import InstitutionResult from '../../Views/InstitutionResult/component.js'
// import FieldResult from '../../Views/FieldResult/component.js'
// import PublisherResult from '../../Views/PublisherResult/component.js'
// import InstitutionFieldResult from '../../Views/InstitutionFieldResult/component.js'
//-----------------------DUMMY RESULTS LIST ----------------------------------
//-----------------------------END VIEWS-----------------------------------

//----------------------- SMART RESULTS LIST ----------------------------------
import SmartLanding from '../../Smart/Landing/component.js'
import SmartTitleResultsList from '../../Smart/TitleResultsList/component.js'
import SmartAuthorResultsList from '../../Smart/AuthorResultsList/component.js'
import SmartFieldResultsList from '../../Smart/FieldResultsList/component.js'
import SmartInstitutionResultsList from '../../Smart/InstitutionResultsList/component.js'
import SmartCountryResultsList from '../../Smart/CountryResultsList/component.js'
import SmartPublisherResultsList from '../../Smart/PublisherResultsList/component.js'
import SmartTitleResult from '../../Smart/TitleResult/component.js'
import SmartAuthorResult from '../../Smart/AuthorResult/component.js'
import SmartFieldResult from '../../Smart/FieldResult/component.js'
import SmartPublisherResult from '../../Smart/PublisherResult/component.js'
import SmartInstitutionResult from '../../Smart/InstitutionResult/component.js'
import SmartInstitutionFieldResult from '../../Smart/InstitutionFieldResult/component.js'

//-----------------------------END SMART RESULT LIST-----------------------------------

//-----------------------------CONTAINERS-----------------------------------
import ResultContainer from '../../../components/Containers/ResultContainer/component.js'
import ResultsListContainer from '../../../components/Containers/ResultsListContainer/component.js'
import UIContainer from '../../../components/Containers/UIContainer/component.js'
//-----------------------------END CONTAINERS-----------------------------------

//-----------------------------COMPONENTS-----------------------------------
import AdvancedFilter from '../../Dummy/AdvancedFilter/component.js'
import InternalNavBar from '../../Dummy/InternalNavBar/component.js'
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
                        <Route path="result" component={ResultContainer}>
                            <Route path="title" component={SmartTitleResult}/>
                            <Route path="author" component={SmartAuthorResult}/>
                            <Route path="field" component={SmartFieldResult}/>
                            <Route path="school" component={SmartInstitutionResult}/>
                            <Route path="publisher" component={SmartPublisherResult}/>
                            <Route path="school-field" component={SmartInstitutionFieldResult}/>
                        </Route>
                        <Route path="results-list" component={ResultsListContainer}>
                            <Route path="title" component={SmartTitleResultsList}/>
                            <Route path="author" component={SmartAuthorResultsList}/>
                            <Route path="field" component={SmartFieldResultsList}/>
                            <Route path="school" component={SmartInstitutionResultsList}/>
                            <Route path="country" component={SmartCountryResultsList}/>
                            <Route path="publisher" component={SmartPublisherResultsList}/>
                        </Route>
                        <Route path="advanced-filter" component={AdvancedFilter}/>
                        <Route path="filter" component={Filter}/>
                        <Route path="internal-navbar" component={InternalNavBar}/>
                        <Route path="*" component={SmartLanding}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default App
