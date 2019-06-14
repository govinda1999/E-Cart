import React from 'react';

const CartColumn = () => {
  return (
    <div className='container-fluid d-none d-lg-block mt-3 text-center text-uppercase'>
      <div className='row'>
        <div className='col-lg-2'>
          <p>product</p>
        </div>
        <div className='col-lg-2'>
          <p>name of product</p>
        </div>
        <div className='col-lg-2'>
          <p>price</p>
        </div>
        <div className='col-lg-2'>
          <p>quantity</p>
        </div>
        <div className='col-lg-2'>
          <p>remove</p>
        </div>
        <div className='col-lg-2'>
          <p>total</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumn;
