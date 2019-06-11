import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { title, price, img_url } = this.props.product;
    return (
      <div className='col-lg-3 col-md-4 col-sm-6 col-12  mt-3 mb-3'>
        <img
          src={img_url}
          alt='product_image'
          style={{ height: '240px', width: '100%' }}
          className='img-fluid card-img-top'
        />
        <p className='mt-2 text-center'>
          <span className='font-weight-bold mr-2'>{title}</span>${price}
        </p>
        <button className='btn btn-warning btn-center text-white'>
          <span className='text-white mr-2'>
            <i className='fas fa-cart-plus' />
          </span>
          Add to cart
        </button>
      </div>
    );
  }
}
