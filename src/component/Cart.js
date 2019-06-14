import React, { Component } from 'react';
import { Consumer } from '../context';
import CartColumn from './CartColumn';
import Emptycart from './Emptycart';
import Title from './Title';
import CartList from './CartList';
import CartTotal from './CartTotal';
export default class Cart extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <div>
                <Title name='your ' title='cart' />
                <CartColumn />
                <CartList />
                <CartTotal value={value} />
              </div>
            );
          } else {
            return <Emptycart />;
          }
        }}
      </Consumer>
    );
  }
}
