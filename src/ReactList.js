import React, {Component} from 'react'

import {List,ListItem} from '@material-ui/core'

import ReactItem from './ReactItem'

class ReactList extends Component {
  createItem = item => {
    return (
      <ListItem button id="listcont">
        {item}
      </ListItem>
    )
  }

  render() {
    const items = [<ReactItem/>,<ReactItem/>,<ReactItem/>,<ReactItem/>,<ReactItem/>,<ReactItem/>,<ReactItem/>,<ReactItem/>]
    const mapList = items.map(this.createItem)
    return (
     <List>{mapList}</List>
    )
  }
}

export default ReactList
