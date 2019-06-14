import React, { Component } from 'react';
import CartItem from './CartItem';
import { Consumer } from '../context';
export default class CartList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { cart } = value;

          return cart.map(item => {
            return (
              <CartItem product={item} key={item.product_id} value={value} />
            );
          });
        }}
      </Consumer>
    );
  }
}
