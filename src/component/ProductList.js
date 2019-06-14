import React, { Component } from 'react';
import Product from './Product';
import { Consumer } from '../context';
import Title from './Title';
export default class ProductList extends Component {
  render() {
    return (
      <div className='container'>
        <Title name='our' title='product' />
        <div className='row'>
          <Consumer>
            {value => {
              return value.products.map(product => {
                return (
                  <Product
                    key={product.product_id}
                    product={product}
                    handler={value.handler}
                    handler_detail={value.handler_detail}
                    openmodal={value.openmodal}
                  />
                );
              });
            }}
          </Consumer>
        </div>
      </div>
    );
  }
}
