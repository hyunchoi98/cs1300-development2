import React, { Component } from "react";
import {
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";

import CartItem from './CartItem.js'

class Cart extends Component {
  cartList = card => {
    return (
      <CartItem card={card} removeCard={this.props.removeFromCart} />
    )
  }

  render() {
    console.log(this.props.cart);
    let listOfCards = this.props.cart.map(this.cartList);

    listOfCards.unshift(
      <ListItem style={{ textAlign: "left" }}>
        <ListItemText variant="h" component="h2">
          Total in Cart: ${this.props.totalFee}
        </ListItemText>
      </ListItem>
    );

    return <List>{listOfCards}</List>;
  }


}
export default Cart;