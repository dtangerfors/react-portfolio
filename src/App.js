import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

import Nav from "./components/layout/Nav"
import FooterNav from './components/FooterNav'

import Home from './pages/Home'
import Resources from './pages/Resources'
import About from './pages/About'


class App extends Component {
  render() {



    return (
      <div className="App">
        <Router>
          <ThemeProvider theme={theme}>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/resources" component={Resources} />
            <Route path="/about" component={About} />
            <FooterNav />
          </ThemeProvider>
        </Router>
      </div>
    )
  }
}

export default App;
