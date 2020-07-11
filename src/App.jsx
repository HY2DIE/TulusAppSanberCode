import React from 'react'
import { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import {Navigation, Home ,Contact} from './component'
import './style/app.css'




class App extends Component{
    render(){
        return(
            <Router>
                <div className='container'>
                    <h1>Judul</h1>
                    <nav>
                        <Navigation/>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path ='/contact' component={Contact}/>
                    </Switch>
                    
                </div>
            </Router>
  
        )
    }
}

export default App;