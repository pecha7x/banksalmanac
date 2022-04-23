import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banks from './Banks/Banks'
import Bank from './Banks/Bank'

class Home extends Component {
  render(){
    return(
      <div>This is the Home page.</div>
    )
  }
}

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='banks' element={<Banks />} />
          <Route path='banks/:bankId' element={<Bank />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
