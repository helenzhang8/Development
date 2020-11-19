import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//stylesheet
import './React.css'

//components within the webpage
import FilteredList from './FilteredList.js'
import Cart from './Cart.js'
//item images
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
import Apple1 from './assets/Apple1.png';
import BluePop from './assets/BluePop.png';
import StrawPop from './assets/StrawPop.png';
import Bread from './assets/Bread.png';
import Brownie from './assets/Brownie.png';
import Cookie from './assets/Cookie.png';
import Cape from './assets/Cape.png';
import Cheesy from './assets/Cheesy.png';
import Egg from './assets/Egg.png';
import EggRoll from './assets/EggRoll.png';
import Froot from './assets/Froot.png';
import Olive from './assets/Olive.png';
import Roman from './assets/Roman.png';
import Sushi from './assets/Sushi.png';
import Bagel from './assets/Bagel.png';
import BananaPan from './assets/BananaPan.png';
import BluePan from './assets/BluePan.png';
import Chobani from './assets/Chobani.png';
import Kombucha from './assets/Kombucha.png';
import Lucky from './assets/Lucky.png';
import Pancake from './assets/Pancake.png';
import Pasta from './assets/Pasta.png';
import Roll from './assets/Roll.png';
import Uncrustable from './assets/Uncrustable.png';
import OGP from './assets/OGP.png';
import Coffee from './assets/Coffee.png';
import ChickenSoup from './assets/ChickenSoup.png';
import Tomato from './assets/Tomato.png';
import Corn from './assets/Corn.png';
import Quesadilla from './assets/Quesadilla.png';
import Mild from './assets/Mild.png';
import SpicyCurry from './assets/SpicyCurry.png';
import Extra from './assets/Extra.png';
import Baked from './assets/Baked.png';
import Miso from './assets/Miso.png';
import Pepperoni from './assets/Pepperoni.png';
import White from './assets/White.png';
import Wing from './assets/Wing.png';
import Burrito from './assets/Burrito.png';

//material-ui, react bootstrap
import {Paper, Card} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

//list of items- each item has the following properties: name, location, meal, price, image, quantity
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
 { name: "Salad", location: "Jo's", meal: "Dinner", price: "$4.99", image:Salad, quantity:0},
 { name: "Mozzarella Sticks", location: "Jo's", meal: "Dinner", price: "$3.99", image:Mozzarella, quantity:0},
 { name: "Spicy With", location: "Jo's", meal: "Dinner", price: "$5.99", image:Spicy, quantity:0},
 { name: "Avocado Toast", location: "Ivy Room", meal: "Dinner", price: "$8.99", image:Avocado, quantity:0},
 { name: "Smoothie", location: "Ivy Room", meal: "Breakfast", price: "$6.99", image:Smoothie, quantity:0},
 { name: "Naanwich", location: "Ivy Room", meal: "Dinner", price: "$7.99", image:Naanwich, quantity:0},
 { name: "Apple", location: "Andrews", meal: "Breakfast", price: "$0.99", image:Apple1, quantity:0},
 { name: "Blueberry Poptart", location: "Jo's", meal: "Breakfast", price: "$1.49", image:BluePop, quantity:0},
 { name: "Strawberry Poptart", location: "Jo's", meal: "Breakfast", price: "$1.49", image:StrawPop, quantity:0},
 { name: "Bread Bowl", location: "Jo's", meal: "Dinner", price: "$7.99", image:Bread, quantity:0},
 { name: "Brownie Slice", location: "Andrews", meal: "Lunch", price: "$2.49", image:Brownie, quantity:0},
 { name: "Cookie Slice", location: "Andrews", meal: "Lunch", price: "$2.49", image:Cookie, quantity:0},
 { name: "Cape Cod Chips", location: "Andrews", meal: "Lunch", price: "$0.99", image:Cape, quantity:0},
 { name: "Cheesy Bread", location: "Ratty", meal: "Lunch", price: "$1.69", image:Cheesy, quantity:0},
 { name: "Egg", location: "Ratty", meal: "Breakfast", price: "$0.49", image:Egg, quantity:0},
 { name: "Egg Roll", location: "Ivy Room", meal: "Lunch", price: "$1.49", image:EggRoll, quantity:0},
 { name: "Froot Loops", location: "VDub", meal: "Breakfast", price: "$0.99", image:Froot, quantity:0},
 { name: "Olive Bread", location: "Ratty", meal: "Lunch", price: "$1.49", image:Olive, quantity:0},
 { name: "Roman Sandwich", location: "Andrews", meal: "Lunch", price: "$7.99", image:Roman, quantity:0},
 { name: "Sushi", location: "Andrews", meal: "Dinner", price: "$8.49", image:Sushi, quantity:0},
 { name: "Bagel", location: "VDub", meal: "Breakfast", price: "$3.99", image:Bagel, quantity:0},
 { name: "Banana Chocolate Chip Pancake", location: "Ratty", meal: "Breakfast", price: "$3.49", image:BananaPan, quantity:0},
 { name: "Blueberry Pancake", location: "Ratty", meal: "Breakfast", price: "$3.49", image:BluePan, quantity:0},
 { name: "Chobani", location: "Ivy Room", meal: "Breakfast", price: "$1.99", image:Chobani, quantity:0},
 { name: "Kombucha", location: "Ivy Room", meal: "Breakfast", price: "$5.49", image:Kombucha, quantity:0},
 { name: "Lucky Charms", location: "VDub", meal: "Breakfast", price: "$1.49", image:Lucky, quantity:0},
 { name: "Pancake", location: "Ratty", meal: "Breakfast", price: "$3.19", image:Pancake, quantity:0},
 { name: "Pasta", location: "Ratty", meal: "Dinner", price: "$5.19", image:Pasta, quantity:0},
 { name: "Dinner Roll", location: "VDub", meal: "Dinner", price: "$1.19", image:Roll, quantity:0},
 { name: "Uncrustable", location: "Jo's", meal: "Lunch", price: "$2.99", image:Uncrustable, quantity:0},
 { name: "OGP", location: "Ratty", meal: "Breakfast", price: "$1.19", image:OGP, quantity:0},
 { name: "Coffee Milk", location: "Ratty", meal: "Breakfast", price: "$1.29", image:Coffee, quantity:0},
 { name: "Chicken Noodle Soup", location: "Ivy Room", meal: "Lunch", price: "$2.49", image:ChickenSoup, quantity:0},
 { name: "Tomato Soup", location: "Ivy Room", meal: "Lunch", price: "$2.49", image:Tomato, quantity:0},
 { name: "Corn Pops", location: "Jo's", meal: "Breakfast", price: "$1.49", image:Corn, quantity:0},
 { name: "Quesadilla", location: "Jo's", meal: "Dinner", price: "$7.99", image:Quesadilla, quantity:0},
 { name: "Yellow Curry", location: "Andrews", meal: "Dinner", price: "$8.49", image:Mild, quantity:0},
 { name: "Spicy Curry", location: "Andrews", meal: "Dinner", price: "$8.49", image:SpicyCurry, quantity:0},
 { name: "Extra Spicy Curry", location: "Andrews", meal: "Dinner", price: "$8.49", image:Extra, quantity:0},
 { name: "Baked Pasta", location: "Andrews", meal: "Lunch", price: "$6.99", image:Baked, quantity:0},
 { name: "Miso Bowl", location: "Ratty", meal: "Lunch", price: "$4.99", image:Miso, quantity:0},
 { name: "Pepperoni Pizza", location: "Andrews", meal: "Lunch", price: "$2.49", image:Pepperoni, quantity:0},
 { name: "White Pizza", location: "Andrews", meal: "Lunch", price: "$2.49", image:White, quantity:0},
 { name: "Burrito Bowl", location: "Andrews", meal: "Breakfast", price: "$7.99", image:Burrito, quantity:0},
 { name: "Chicken Wings", location: "Jo's", meal: "Dinner", price: "$3.99", image:Wing, quantity:0}
]

class App extends Component {
  constructor() {
    super()
    this.state ={
      //items stores items in cart
      items: [],
    }
  }
  //function to add item to cart- if not already present, the item is added
  //to the array. otherwise, the quantity is incremented by one.
  //the quantity must be incremented through the items array to cause a change
  //of state and rerender the cart
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

  //increase quantity by 1 from within cart
  addOne = item => {
    const items = this.state.items
    items[items.indexOf(item)].quantity += 1
    this.setState({
      items
    })
  }

  //decrease quantity by 1 from within cart
  removeOne = item => {
    const items = this.state.items
    items[items.indexOf(item)].quantity -= 1
    this.setState({
      items
    })
  }

  //remove item from cart and cart array
  removeAll = item => {
    item.quantity = 0
    const items = this.state.items
    this.setState({
          items: items.filter(a => a.name != item.name)
        })
  }

  //sets quantity to 0- used by clearItems function
  setQuantity = item => {
    item.quantity= 0
  }

  //removes all items from cart
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
        {/*title image*/}
        <Image src={BDS}/>
        {/*items display*/}
        <FilteredList addItem={this.addItem} list={menuList}/>
        {/*cart section of page*/}
        <Cart items={this.state.items} clear={this.clearItems} add={this.addOne} removeAll={this.removeAll} removeOne={this.removeOne}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
