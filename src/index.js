import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './React.css'
import FilteredList from './FilteredList.js'
import Cart from './Cart.js'

import BDS from './assets/BDS.png';
import Chicken from './assets/Chicken.png';
import Spicy from './assets/Spicy.png';
import Naanwich from './assets/Naanwich.png';
import Pho from './assets/Pho.png';
import Tofu from './assets/Tofu.png';
import Salmon from './assets/Salmon.png';
import Omelette from './assets/Omelette.png';
import Avocado from './assets/Avocado.png';
import Granola from './assets/Granola.png';
import Mozzarella from './assets/Mozzarella.png';
import Oats from './assets/Oats.png';
import Salad from './assets/Salad.png';
import Taco from './assets/Taco.png';
import Plantain from './assets/Plantain.png';
import Smoothie from './assets/Smoothie.png';

import {Paper, Card} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


var menuList = [
 { name: "Teriyaki Salmon", location: "Andrews", meal: "Dinner", price: "$8.99", image:Salmon, quantity:0},
 { name: "Granola Bowl", location: "Andrews", meal: "Breakfast", price: "$6.99", image:Granola, quantity:0},
 { name: "Pho", location: "Andrews", meal: "Lunch", price: "$7.99", image:Pho, quantity:0},
 { name: "Overnight Oats", location: "VDub", meal: "Breakfast", price: "$4.99", image:Oats, quantity:0},
 { name: "Tofu Nuggets", location: "VDub", meal: "Lunch", price: "$5.99", image:Tofu, quantity:0},
 { name: "Chicken Fingers", location: "VDub", meal: "Lunch", price: "$6.99", image:Chicken, quantity:0},
 { name: "Omelette", location: "Ratty", meal: "Breakfast", price: "$6.99", image:Omelette, quantity:0},
 { name: "Plantains", location: "Ratty", meal: "Lunch", price: "$4.99", image:Plantain, quantity:0},
 { name: "Taco Tuesday", location: "Ratty", meal: "Lunch", price: "$8.99", image:Taco, quantity:0},
 { name: "Salad", location: "Jos", meal: "Dinner", price: "$4.99", image:Salad, quantity:0},
 { name: "Mozzarella Sticks", location: "Jos", meal: "Dinner", price: "$3.99", image:Mozzarella, quantity:0},
 { name: "Spicy With", location: "Jos", meal: "Dinner", price: "$5.99", image:Spicy, quantity:0},
 { name: "Avocado Toast", location: "IvyRoom", meal: "Dinner", price: "$8.99", image:Avocado, quantity:0},
 { name: "Smoothie", location: "IvyRoom", meal: "Breakfast", price: "$6.99", image:Smoothie, quantity:0},
 { name: "Naanwich", location: "IvyRoom", meal: "Dinner", price: "$7.99", image:Naanwich, quantity:0}
]

class App extends Component {

  constructor() {
    super()
    this.state ={
      items: [],

    }
  }

  addItem = item => {
    if (this.state.items.indexOf(item) < 0) {
      const items = [...this.state.items, item]
      items[items.indexOf(item)].quantity += 1
      this.setState({
        items
      })
    } else {
      const items = this.state.items
      items[items.indexOf(item)].quantity += 1
      this.setState({
        items
      })
    }
  }

  addOne = item => {
    const items = this.state.items
    items[items.indexOf(item)].quantity += 1
    this.setState({
      items
    })
  }

  removeOne = item => {
    const items = this.state.items
    items[items.indexOf(item)].quantity -= 1
    this.setState({
      items
    })
  }

  removeAll = item => {
    item.quantity = 0
    const items = this.state.items
    this.setState({
          items: items.filter(a => a.name != item.name)
        })
  }

  setQuantity = item => {
    item.quantity= 0
  }

  getQuantity = item => {
    return(item.quantity)
  }

  clearItems = () => {
    const items = []
    this.setState({
      items
    })
    menuList.map(this.setQuantity)
  }

  render() {
    return(
      <div style={{textAlign:"center"}}>
        <Image src={BDS}/>
        <FilteredList addItem={this.addItem} list={menuList}/>
        <Cart items={this.state.items} clear={this.clearItems} add={this.addOne} removeAll={this.removeAll} removeOne={this.removeOne} getQuantity={this.getQuantity}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
