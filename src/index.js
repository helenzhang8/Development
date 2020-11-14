import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './React.css'
import ReactList from './ReactList.js'

import {Paper} from '@material-ui/core'

class App extends Component {
  render() {
    return(
      <div>
      <h1>fruits make me emotional</h1>
        <Paper>
          <ReactList/>
        </Paper>
        <h4>made by helen</h4>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
