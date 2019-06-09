import React, { Component } from 'react';
import Product from './Product';
import { Consumer } from '../context';
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {value => {
            return value.map(product => {
              return <Product key={product.product_id} product={product} />;
            });
          }}
        </Consumer>
      </div>
    );
  }
}
