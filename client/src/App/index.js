import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import { loadHelloWorld } from './duck'

const App = ({ data, load }) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to Hapi-React-Redux-Boilerplate</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>Hello World from the Api Server: {data}</p>
    <p>
      <button onClick={() => load()}>load data from server</button>
    </p>
  </div>
)

App.propTypes = {
  data: PropTypes.string.isRequired,
  load: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.app.data
})

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadHelloWorld())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)