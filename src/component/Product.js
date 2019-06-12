import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { title, price, img_url, incart } = this.props.product;
    return (
      <div className='col-lg-3 col-md-4 col-sm-6 col-12  mt-3 mb-3'>
        <div onClick={() => console.log('Image clicked')}>
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
        <button
          className='btn btn-warning btn-center text-white'
          disabled={incart ? true : false}
          onClick={() => console.log('Button clicked')}
        >
          {incart ? (
            <span>In Cart</span>
          ) : (
            <span>
              <span className='text-white mr-2'>
                <i className='fas fa-cart-plus' />
              </span>
              Add to Cart
            </span>
          )}
        </button>
      </div>
    );
  }
}
