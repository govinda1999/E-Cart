import React, { Component } from 'react';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';
export default class Modal extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { modalopen, closemodal } = value;
          if (!modalopen) {
            return null;
          } else {
            const { img_url, title, price } = value.modalproduct;
            return (
              <div className='container modal-div'>
                <div className='row'>
                  <div
                    id='modal'
                    className='col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-5'
                  >
                    <h5>Items added to cart</h5>
                    <img
                      src={img_url}
                      alt='product_img'
                      className='img-fluid'
                    />
                    <h5>{title}</h5>
                    <h5 className='text-muted'>price : ${price}</h5>
                    <Link to='/'>
                      <button
                        className='btn btn-outline-primary'
                        onClick={closemodal}
                      >
                        Store
                      </button>
                    </Link>
                    <Link to='/cart'>
                      <button
                        className='btn btn-outline-warning mt-2'
                        onClick={closemodal}
                      >
                        Go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}
