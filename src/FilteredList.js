import React, {Component} from 'react'

import {List,ListItem,} from '@material-ui/core'
import ReactItem from './ReactItem'
import DisplayList from './DisplayList'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class FilteredList extends Component {
  constructor() {
    super()
    this.state ={
      location: "All",
      meal: "All",
      sort: "Random",
      //states for link colors so active link can be highlighted
      color11: "#2b9348",
      color12: "#000000",
      color13: "#000000",
      color14: "#000000",
      color15: "#000000",
      color16: "#000000",
      color21: "#4361ee",
      color22: "#000000",
      color23: "#000000",
      color24: "#000000",
      color31: "#560bad",
      color32: "#000000",
      color33: "#000000"
      }
    }


  onSelectFilterLocation = event => {
	   this.setState({
		     location: event
	   })

     if(event === "All") {
       this.setState({
  		    color11: "#2b9348",
          color12: "#000000",
          color13: "#000000",
          color14: "#000000",
          color15: "#000000",
          color16: "#000000",
  	   })
    } else if (event === "Andrews") {
       this.setState({
  		    color11: "#000000",
          color12: "#2b9348",
          color13: "#000000",
          color14: "#000000",
          color15: "#000000",
          color16: "#000000",
  	   })
    } else if (event === "Ivy Room") {
       this.setState({
  		    color11: "#000000",
          color12: "#000000",
          color13: "#2b9348",
          color14: "#000000",
          color15: "#000000",
          color16: "#000000",
  	   })
     } else if (event === "Jo's") {
        this.setState({
   		     color11: "#000000",
           color12: "#000000",
           color13: "#000000",
           color14: "#2b9348",
           color15: "#000000",
           color16: "#000000",
   	   })
     } else if (event === "Ratty") {
        this.setState({
           color11: "#000000",
           color12: "#000000",
           color13: "#000000",
           color14: "#000000",
           color15: "#2b9348",
           color16: "#000000",
        })
      } else {
       this.setState({
  		    color11: "#000000",
          color12: "#000000",
          color13: "#000000",
          color14: "#000000",
          color15: "#000000",
          color16: "#2b9348",
  	   })
   	}
  };

  onSelectFilterMeal = event => {
	   this.setState({
		     meal: event
	   })

     if(event === "All") {
       this.setState({
  		    color21: "#4361ee",
          color22: "#000000",
          color23: "#000000",
          color24: "#000000"
  	   })
    } else if (event === "Breakfast") {
       this.setState({
  		    color21: "#000000",
          color22: "#4361ee",
          color23: "#000000",
          color24: "#000000"
  	   })
    } else if (event === "Lunch") {
       this.setState({
  		    color21: "#000000",
          color22: "#000000",
          color23: "#4361ee",
          color24: "#000000"
  	   })
     } else {
       this.setState({
  		    color21: "#000000",
          color22: "#000000",
          color23: "#000000",
          color24: "#4361ee"
  	   })
   	}
  };

  onSelectSort = event => {
	   this.setState({
		     sort: event
	   })

     if(event === "Random") {
       this.setState({
  		    color31: "#560bad",
          color32: "#000000",
          color33: "#000000"
  	   })
    } else if (event === "Asc") {
       this.setState({
  		    color31: "#000000",
          color32: "#560bad",
          color33: "#000000"
  	   })
    } else {
       this.setState({
  		    color31: "#000000",
          color32: "#000000",
          color33: "#560bad"
  	   })
     }
  };

  //functions to only show items matching filter criteria
  matchesFilterLocation = item => {
  	if(this.state.location === "All") {
  		return true
  	} else if (this.state.location === item.location) {
  		return true
  	} else {
  		return false
  	}
  }

  matchesFilterMeal = item => {
  	if(this.state.meal === "All") {
  		return true
  	} else if (this.state.meal === item.meal) {
  		return true
  	} else {
  		return false
  	}
  }

  //sorts item based on price
  sortItems = (a,b) => {
    if(this.state.sort === "Asc") {
      if(a.price < b.price) return -1;
    } else if(this.state.sort === "Desc") {
      if(a.price > b.price) return -1;
    }
  }

  render() {
    return (
      <div>
      //toolbars with links to change filter/sort options
      <Navbar style={{backgroundColor: "#f0efeb"}}>
        <Navbar.Brand style={{color:"#4d194d"}}>Dining Hall:</Navbar.Brand>
        <Nav.Link id="nav-link" style={{color: this.state.color11}} eventKey="All" onSelect={this.onSelectFilterLocation}>All</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color12}} eventKey="Andrews" onSelect={this.onSelectFilterLocation}>Andrews</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color13}} eventKey="Ivy Room" onSelect={this.onSelectFilterLocation}>Ivy Room</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color14}} eventKey="Jo's" onSelect={this.onSelectFilterLocation}>Jo's</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color15}} eventKey="Ratty" onSelect={this.onSelectFilterLocation}>Ratty</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color16}} eventKey="VDub" onSelect={this.onSelectFilterLocation}>VDub</Nav.Link>
      </Navbar>
      <Navbar style={{backgroundColor: "#f0efeb"}}>
        <Navbar.Brand style={{color:"#4d194d"}}>Meal:</Navbar.Brand>
        <Nav.Link id="nav-link" style={{color: this.state.color21}} eventKey="All" onSelect={this.onSelectFilterMeal}>All</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color22}} eventKey="Breakfast" onSelect={this.onSelectFilterMeal}>Breakfast</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color23}} eventKey="Lunch" onSelect={this.onSelectFilterMeal}>Lunch</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color24}} eventKey="Dinner" onSelect={this.onSelectFilterMeal}>Dinner</Nav.Link>
      </Navbar>
      <Navbar style={{backgroundColor: "#f0efeb"}}>
        <Navbar.Brand style={{color:"#4d194d"}}>Sort:</Navbar.Brand>
        <Nav.Link id="nav-link" style={{color: this.state.color31}} eventKey="Random" onSelect={this.onSelectSort}>Random</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color32}} eventKey="Asc" onSelect={this.onSelectSort}>Price: Low to High</Nav.Link>
        <Nav.Link id="nav-link" style={{color: this.state.color33}} eventKey="Desc" onSelect={this.onSelectSort}>Price: High to Low</Nav.Link>
      </Navbar>
        <div>
          //create DisplayList to show items that match criteria
          <DisplayList addItem={this.props.addItem} list={this.props.list.filter(this.matchesFilterLocation).filter(this.matchesFilterMeal).sort(this.sortItems)}></DisplayList>
        </div>
      </div>
    )
  }
}

export default FilteredList
