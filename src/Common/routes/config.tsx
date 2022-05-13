import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home/index'
import Login from './Login'

export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/login' component={Login} />
         <Route path='/' component={Home} />
      </Switch>
   </Router>
)
