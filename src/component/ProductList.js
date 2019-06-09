import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>Hello from ProductList</h1>
        <Product />
      </div>
    );
  }
}
