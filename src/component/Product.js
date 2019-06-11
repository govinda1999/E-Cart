import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { title, price, img_url } = this.props.product;
    return (
      <div className='col-lg-3 col-md-4 col-sm-6 col-12  mt-2'>
        <img
          src={img_url}
          alt='product_image'
          style={{ height: '240px', width: '100%' }}
          className='img-fluid card-img-top'
        />
        <p className='mt-2 text-center'>
          <span className='font-weight-bold mr-2'>{title}</span>${price}
        </p>
      </div>
    );
  }
}
