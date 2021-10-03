import React from 'react'
import NavMain from './NavMain'
import Profile from './Profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MySongs from './MySongs';

const IndividualMusicPage = () => {
    return (
        <section className='main-music'>
            <div className='wrapper-main'>
                <div className='container-main'>
                    <Profile/>
                    <Router>
                        <NavMain/>
                        <Switch>
                            <Route path='/mymusic/library/song'>
                                
                            </Route>
                        </Switch>
                    </Router>
                    <div className='container-song'>
                        <MySongs/>
                    </div>
                </div>
             </div>
            
        </section>
    )
}

export default IndividualMusicPage
