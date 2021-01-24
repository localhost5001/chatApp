import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css'
import Home from './features/home'
import Chat from './features/chat'
import Register from './features/register'
import NotFound from './features/notFound'

import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/c/:id" component={Chat} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
