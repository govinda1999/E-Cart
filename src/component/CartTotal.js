import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaypalBtn from './PaypalBtn';
export default class CartTotal extends Component {
  render() {
    const { cartsubtotal, tax, carttotal, clearcart } = this.props.value;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ml-sm-5 col-sm-8 ml-md-auto text-capitalize text-right'>
            <Link to='/'>
              <button
                className='btn btn-outline-danger px-5 text-uppercase'
                onClick={clearcart}
              >
                Clear cart
              </button>
            </Link>

            <h3 className='mt-2'>SubTotal : $ {cartsubtotal}</h3>
            <h3 className='mt-2'>Tax : $ {tax}</h3>
            <h3 className='mt-2'>Total : $ {carttotal}</h3>
            <PaypalBtn
              total={carttotal}
              clearcart={clearcart}
              history={this.props.history}
            />
          </div>
        </div>
      </div>
    );
  }
}
