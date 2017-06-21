import React, {Component} from 'react'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {saveState} from '../../../os-toolkit/SyllabusLocalStorage/component'

//----------------------- SMART COMPONENTS ----------------------------------
import SmartLanding from '../../Smart/Landing/component.js'
import SmartUniversityLanding from '../../Smart/UniversityLanding/component.js'
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
import LogedContainer from '../../../components/Containers/LogedContainer/component.js'
import UIContainer from '../../../components/Containers/UIContainer/component.js'
//-----------------------------END CONTAINERS-----------------------------------

//-----------------------------COMPONENTS-----------------------------------
import Login from '../../Views/Login/component.js'
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

const universityInfo = {
  pathName: 'columbia_university',
  name: 'Columbia University',
  field: 'architecture',
  year: '2017',
  syllabi: 4300
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={UIContainer}>
                        <IndexRoute component={SmartLanding}/>
                        <Route
                          path={`${universityInfo.pathName}`}
                          component={LogedContainer}
                          universityInfo={universityInfo}
                          >
                          <IndexRoute component={SmartUniversityLanding}/>
                          {/* <Route path={`${universityInfo.field}`} component={SmartUniversityField}>
                            <Route path={`${universityInfo.year}`} component={SmartUniversityFieldYear}/>
                          </Route> */}
                          {/* <Route path="innerView" component={SmartUniversityLanding}>
                            <Route path="title" component={SmartTitleResultsList}/>
                          </Route> */}
                        </Route>
                        <Route path="login" component={Login}/>
                        <Route path="*" component={SmartLanding}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default App
