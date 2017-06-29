import React, {Component} from 'react'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {saveState} from '../../../os-toolkit/SyllabusLocalStorage'

//----------------------- SMART COMPONENTS ----------------------------------
import SmartLanding from '../../Smart/Landing/component.js'
import SmartUniversityLanding from '../../Smart/UniversityLanding/component.js'
import SmartUniversityField from '../../Smart/UniversityField/component.js'
import SmartUniversityFieldYear from '../../Smart/UniversityFieldYear/component.js'
import SmartFullTextResultsList from '../../Smart/FullTextResultsList/component.js'
import SmartTitleResultsList from '../../Smart/TitleResultsList/component.js'
import SmartAuthorResultsList from '../../Smart/AuthorResultsList/component.js'
import SmartInstructorEmailsResultsList from '../../Smart/InstructorEmailsResultsList/component.js'
import SmartTitleResult from '../../Smart/TitleResult/component.js'
import SmartAuthorResult from '../../Smart/AuthorResult/component.js'
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

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={UIContainer}>
                        <IndexRoute component={SmartLanding}/>
                        <Route
                          path="university-portal"
                          component={LogedContainer}
                          >
                          <IndexRoute component={SmartUniversityLanding}/>
                          <Route path="field" component={SmartUniversityField}/>
                          <Route path="field-year" component={SmartUniversityFieldYear}/>
                          <Route path="result-list">
                            <Route path="full-texts" component={SmartFullTextResultsList}/>
                            <Route path="titles" component={SmartTitleResultsList}/>
                            <Route path="authors" component={SmartAuthorResultsList}/>
                            <Route path="instructor-emails" component={SmartInstructorEmailsResultsList}/>
                          </Route>
                          <Route path="result">
                            <Route path="title" component={SmartTitleResult}/>
                            <Route path="author" component={SmartAuthorResult}/>
                          </Route>
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
