import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

import Nav from "./layout/Nav"
import Hero from './layout/Hero'
import Cases from './layout/Cases'
import Footer from './layout/Footer'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav />
        <Hero />
        <Cases />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
