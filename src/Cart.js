import React, {Component} from 'react'

import {List,ListItem,ListItemText,Paper} from '@material-ui/core'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Image from 'react-bootstrap/Image'
//Package to parse prices into floats- will return NaN otherwise
var parsePrice = require('parse-price')

class Cart extends Component {
  /*function to create a card for an item in the cart*/
  cartItem = item => {
    return (
      <Paper style={{backgroundColor:"white", padding :"10px", marginLeft:"3%", marginRight:"3%", marginTop:"10px", marginBottom:"10px"}}>
      <div id="cart">
      <div style={{display:"flex", flex:"0 1 auto", flexDirection:"row",justifyContent:"space-around", alignItems:"center"}}>
        {/*top row has item location and remove button*/}
        <h2 style={{textAlign:"left",color:"#2b9348"}}>{item.location}</h2>
        <h2/>
        <Button variant="danger" onClick={()=>this.props.removeAll(item)} style={{textAlign:"right",fontSize:"20px",margins:"10px"}}>x</Button>
      </div>
        <div class="cartName" style={{width:"100%",display:"flex", flexDirection:"row",justifyContent:"space-around", alignItems:"center", margins:"20px"}}>
        {/*main row has image of item, name and quantity controls, and price*/}
          <Image src={item.image} style={{maxWidth:"8rem",maxHeight:"8rem"}}/>
          <div style={{textAlign:"left", flexDirection:"column"}}>
            <h1>{item.name}</h1>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
            {/*remove button, quantity, and add button*/}
              {(item.quantity > 1)
                ? <Button variant="success" onClick={()=>this.props.removeOne(item)} style={{fontSize:"30px", margins:"10px", padding:"10px"}}>-</Button>
                : <Button variant="success" onClick={()=>this.props.removeOne(item)} style={{fontSize:"30px", margins:"10px", padding:"10px"}} disabled>-</Button>
              }
              <h1>{item.quantity}</h1>
              <Button variant="success" onClick={()=>this.props.add(item)} style={{fontSize:"25px", margins:"10px", padding:"10px"}}>+</Button>
            </div>
          </div>
          <div style={{textAlign:"right"}}>
            {/*price is unit price times quantity*/}
            <h1>${Math.round(((parseFloat(item.quantity)*parsePrice(item.price)) + Number.EPSILON)*100)/100}</h1>
          </div>
        </div>
        <h2/>
        </div>
      </Paper>
    )
  }

  render() {
    //takes in all items in the cart and maps them to the createTask function
    const items = this.props.items
    const listItems = items.map(this.cartItem)
    //accumulator calculates total price of all items in cart
    const totalPrice = items.reduce(function(accumulator, currentValue) {return Math.round((accumulator + currentValue.quantity*parsePrice(currentValue.price) + Number.EPSILON) * 100) / 100},0)
    return (
      <Paper style={{backgroundColor:"#f0efeb", textAlign:"center", justifyContent:"center", display:"flex", flexDirection:"column", margin:"50px", padding:"50px"}}>
        {/*if cart is empty, a notice is displayed*/}
        <h1 style={{color:"#2a9d8f"}}>Cart
          {items.length === 0 &&
            " Empty"
          }
        </h1>
        {/*otherwise, item cards are shown, followed by total price*/}
        <div style={{textAlign:"center"}}>{listItems}</div>
        <div style={{color:"#2a9d8f", textAlign:"center", padding:"10px"}}>
          {(totalPrice > 0)
            ? <h1>Total: ${totalPrice}</h1>
            : <h1> </h1>
          }
        </div>
        {/*remove all items from cart*/}
        <div>
          {items.length > 0 &&
            <Button variant="success" onClick={this.props.clear} style={{minWidth:"100px",width:"10%", padding:"10px"}}>Clear Cart</Button>
          }
        </div>
      </Paper>
    )
  }
}

export default Cart
