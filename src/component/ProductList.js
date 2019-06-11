import React, { Component } from 'react';
import Product from './Product';
import { Consumer } from '../context';
export default class ProductList extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Consumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.product_id} product={product} />;
              });
            }}
          </Consumer>
        </div>
      </div>
    );
  }
}
