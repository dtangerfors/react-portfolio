import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

import Nav from "./components/layout/Nav"
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Resources from './pages/Resources'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
