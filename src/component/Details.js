import React, { Component } from 'react';
import { Products } from '../data';
import { Context } from '../context';

export default class Details extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    // var rec = {};
    // let i = 0;
    // for (i = 0; i < Products.length; i++) {
    //   if (props.id === Products[i].product_id) {
    //     rec = Products[i];
    //     break;
    //   }
    // }
    this.state = {
      id: props.id,
      product: Products[0]
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <a
              className='btn btn-dark text-white mt-2 mb-2'
              href='/'
              role='button'
            >
              Back
            </a>
            <img
              src={this.state.product.img_url}
              alt='product_image'
              className='img-fluid mt-2'
            />
          </div>
          <div className='col-md-6 col-12 mt-2 mb-2'>
            <h4>{this.state.product.title}</h4>
            <p>Price ${this.state.product.price}</p>
            <button className='btn btn-success'>
              <span className='text-white mr-2'>
                <i className='fas fa-cart-plus' />
              </span>
              Add to cart
            </button>
            <a
              href='/cart'
              className='btn btn-warning text-white ml-2'
              role='button'
            >
              Go to Cart
            </a>
            <div className='card mt-2'>
              <div className='card-header text-capitalize'>description</div>
              <ul className='list-group'>
                {this.state.product.description.map((descripe, index) => {
                  return (
                    <li key={index} className='list-group-item'>
                      {descripe}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let i = 0;
    for (i = 0; i < this.context.products.length; i++) {
      if (this.context.products[i].product_id === this.state.id) {
        this.setState({ product: this.context.products[i] });
        break;
      }
    }
  }
}
