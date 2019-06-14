import React, { Component } from 'react';

export default class CartItem extends Component {
  render() {
    const {
      product_id,
      title,
      img_url,
      price,
      count,
      total
    } = this.props.product;
    const { increment, decrement, removeItem } = this.props.value;
    return (
      <div className='container-fluid  mt-2 text-center text-capitalize'>
        <div className='row'>
          <div className='col-lg-2 col-10 mx-auto'>
            <img
              src={img_url}
              alt='product_img'
              className='img-fluid'
              style={{ height: '5rem' }}
            />
          </div>
          <div className='col-lg-2 col-10 mx-auto'>
            <p>
              <span className='d-lg-none'>Product : </span> {title}
            </p>
          </div>
          <div className='col-lg-2 col-10 mx-auto'>
            <p>
              <span className='d-lg-none'>Price : </span>$ {price}
            </p>
          </div>
          <div className='col-lg-2 col-10 mx-auto justify-content-center'>
            <button
              className='btn btn-outline-dark mr-1'
              onClick={() => decrement(product_id)}
            >
              {' '}
              -{' '}
            </button>
            <span> {count} </span>
            <button
              className='btn btn-outline-dark ml-1'
              onClick={() => increment(product_id)}
            >
              {' '}
              +{' '}
            </button>
          </div>
          <div className='col-lg-2 col-10 mx-auto'>
            <button
              className='btn btn-white'
              onClick={() => removeItem(product_id)}
            >
              <i className='fas fa-trash-alt text-warning' />
            </button>
          </div>
          <div className='col-lg-2 col-10 mx-auto'>
            <h5>
              <span className='d-lg-none'>Total : </span>$ {total}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
