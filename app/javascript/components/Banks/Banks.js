import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Bank from './Bank'

class Banks extends Component {
  state = {
    banks: []
  }

  componentDidMount() {
    axios.get('/api/banks')
      .then( resp => {
        this.setState({ banks: resp.data })
      })
      .catch( data => {
        debugger
      })
  }

  render() {
    const banks = this.state.banks.map( (bank, index) => {
      return (<li key={index}>{bank.name}</li>)
    })

    return (
      <div className="home">
        <div className="header">
          <h1>OpenFlights</h1>
          <p className="subheader">Honest, unbiased airline reviews. Share your experience.</p>
        </div>
        <div className="grid">
          <ul>
            { banks }
          </ul>
        </div>
      </div>
    )
  }
}

export default Banks
