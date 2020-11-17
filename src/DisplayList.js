import React, {Component} from 'react'

import {List,ListItem,Paper} from '@material-ui/core'


import ReactItem from './ReactItem'
import FilteredList from './FilteredList'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

class DisplayList extends Component {
  createItem = item => {
    return (
      <Card id="card" style={{maxWidth: '15rem', minWidth: '10rem', flex:'1 1 auto',textAlign:'center', marginBottom:"20px", marginRight:"20px"}}>
        <Card.Img variant="top" src={item.image} />
        <ListGroup className="list-group-flush">
          <ListGroupItem style={{backgroundColor:"#2b9348", color:"white"}}>{item.location}</ListGroupItem>
          <ListGroupItem style={{backgroundColor:"#4361ee", color:"white"}}>{item.meal}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          </Card.Body>
        <Card.Footer>
        <h1>{item.price}</h1>
        <Button variant="success" onClick={() => this.props.addItem(item)} style={{color:"white"}}>
          Add to Cart
        </Button>

        </Card.Footer>
      </Card>
    )
  }

  render() {
    const itemList = this.props.list
    const mapList = itemList.map(this.createItem)
    return (
      <Paper style={{backgroundColor:"#f0efeb",marginTop :"50px", marginLeft :"50px", marginRight :"50px", marginBottom :"50px"}}>
        <CardDeck style={{width:"100%", flexWrap:"wrap", justifyContent:"center", display:"flex", paddingTop :"20px", paddingLeft :"20px", paddingRight :"20px", paddingBottom :"20px"}}>
          {mapList}
            <h2>{mapList.length ? "" : "No results found."}</h2>

        </CardDeck>
      </Paper>
    )
  }
}

export default DisplayList
