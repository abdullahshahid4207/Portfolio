import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import Home from '../screens/Home'
import Portfolio from '../screens/Portfolio'







const MyRouter = () => {
    return(
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
        </Router>
    )
}

export default MyRouter;