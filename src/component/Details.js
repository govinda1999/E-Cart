import React, { Component } from 'react';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';
export default class Details extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <Link to='/'>
                    <button className='btn btn-dark text-white mt-2 mb-2'>
                      Back
                    </button>
                  </Link>
                  <img
                    src={value.detailpage.img_url}
                    alt='product_image'
                    className='img-fluid mt-2'
                  />
                </div>
                <div className='col-md-6 col-12 mt-2 mb-2'>
                  <h4>{value.detailpage.title}</h4>
                  <p>Price ${value.detailpage.price}</p>

                  <button
                    className='btn btn-success text-white'
                    disabled={value.detailpage.incart ? true : false}
                    onClick={() => {
                      value.handler(value.detailpage.product_id);
                      value.openmodal(value.detailpage.product_id);
                    }}
                  >
                    {value.detailpage.incart ? (
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
                  <Link to='/cart'>
                    <button className='btn btn-warning text-white ml-2'>
                      Go to Cart
                    </button>
                  </Link>

                  <div className='card mt-2'>
                    <div className='card-header text-capitalize'>
                      description
                    </div>
                    <ul className='list-group'>
                      {value.detailpage.description.map((descripe, index) => {
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
        }}
      </Consumer>
    );
  }
  // componentDidMount() {
  //   console.log('id context', this.context.id);
  //   var rec = {};
  //   let i = 0;
  //   for (i = 0; i < this.context.products.length; i++) {
  //     if (this.context.id === this.context.products[i].product_id) {
  //       rec = this.context.products[i];
  //       break;
  //     }
  //   }
  //   this.setState(
  //     () => {
  //       return { product: rec };
  //     },
  //     () => console.log('rec ', rec)
  //   );
  // }
}
