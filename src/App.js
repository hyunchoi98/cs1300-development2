import React, { Component } from "react";

import TypeFilter from "./TypeFilter.js";
import IssuerFilter from "./IssuerFilter.js";
import FeeFilter from "./FeeFilter.js";
import FilteredList from "./FilteredList.js";
import Sorter from "./Sorter.js";
import Cart from './Cart.js';

import './App.css';
import { CardTypes, Issuers, AnnualFees, SortTypes } from "./const.js";

import Grid from '@material-ui/core/Grid';



class App extends Component {

  constructor() {
    super();
    this.state = {
      cart: [],
      filter: {
        type: CardTypes.ALL_TYPES,
        issuer: Issuers.ALL_ISSUERS,
        fee: AnnualFees.ALL_FEES,
      },
      sortType: SortTypes.NAME,
      totalFee: 0,
    };
    // const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  }

  changeType = event => {
    let newType = event.target.value;
    let newFilter = this.state.filter;
    newFilter["type"] = newType;
    this.setState({
      filter: newFilter,
    });

  };

  changeIssuer = event => {
    let newIssuer = event.target.value;
    let newFilter = this.state.filter;
    newFilter["issuer"] = newIssuer;
    this.setState({
      filter: newFilter,
    });
  };

  changeFee = event => {
    let newFee = event.target.value;
    let newFilter = this.state.filter;
    newFilter["fee"] = newFee;
    this.setState({
      filter: newFilter,
    });
  };

  changeSortType = event => {
    let newSortType = event.target.value;
    this.setState({
      sortType: newSortType,
    });
  };

  addToCart = card => {
    let cart = this.state.cart;

    // Only allow one of each card to be added to the cart
    if (cart.filter(e => e.name === card.name).length > 0) {
      window.alert("Only one of each card can be added to your cart!")
    } else {
      cart.push(card);
      let total = this.state.totalFee + card.fee;
      this.setState({
        totalFee: total,
        cart: cart,
      });
    }
    console.log(this.state.cart)
  };

  removeFromCart = card => {
    let total = this.state.totalFee;
    let cart = this.state.cart;

    total = total - card.fee; // decrements total fee
    cart = cart.filter((x) => x !== card); // removes the card from the cart

    this.setState({
      totalFee: total,
      cart: cart,
    });
  };


  render() {
    return (
      <div>
        <h1 style={{ margin: 10 }}>Credit Card Finder</h1>
        <h2 style={{ margin: 10 }}>Find the best credit card for you!</h2>
        <div id="filters">
          <Grid style={{ margin: 10, padding: 5 }}>
            <Sorter style={{ padding: 5 }} changeSort={this.changeSortType} sortType={this.state.sortType}></Sorter>
            <TypeFilter style={{ padding: 5 }} changeType={this.changeType} filter={this.state.filter}></TypeFilter>
            <IssuerFilter style={{ padding: 5 }} changeIssuer={this.changeIssuer} filter={this.state.filter}></IssuerFilter>
            <FeeFilter style={{ padding: 5 }} changeFee={this.changeFee} filter={this.state.filter}></FeeFilter>
          </Grid>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 5,
        }}>
          <FilteredList
            style={{ width: "75%" }}
            filter={this.state.filter}
            sortType={this.state.sortType}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />

          <Cart
            style={{ width: "25%" }}
            cart={this.state.cart}
            totalFee={this.state.totalFee}
            removeFromCart={this.removeFromCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
