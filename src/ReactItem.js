import React, {Component} from 'react'


import getRandomFruitsName from 'random-fruits-name'
import randomColor from 'randomcolor'
import getEmoji from 'random-text-meme'
//import 'random-text-meme'

//var randomColor = require('randomcolor');
const randomTextMeme = require('random-text-meme')

class ReactItem extends Component {
  constructor() {
    super()
    this.state ={
      color: 'gray',
      emotions: [],
      fruit: [getRandomFruitsName()]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      emotions: [randomTextMeme.getEmoji()],
      color: randomColor()
    })
  }

  render(){
    return(
      <div class="listitem" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
        <h2>{this.state.fruit}</h2>
        <h2>{this.state.emotions}</h2>
      </div>
    )
  }
}

export default ReactItem
