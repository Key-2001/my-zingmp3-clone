import React from 'react'
//react router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//page
import Header from './component/Header'
import IndividualMusicPage from './component/IndividualMusicPage'
import SideBar from './component/SideBar'

function App() {
  return (
    <main className='rose'>
        <div className="app">
          <Router>
            <SideBar/>
            <Header/>
            <Switch>
                <Route exact path='/'>
                  <IndividualMusicPage/>
                </Route>
            </Switch>
          </Router>
        </div>
    </main>
  );
}

export default App;
