import React, { Component } from 'react';

export default class PageNotFound extends Component {
  render() {
    return (
      <div className='container mt-2'>
        <a className='btn btn-primary mb-2' href='/' role='button'>
          Go To HOMEPAGE
        </a>
        <div className='text-center mb-3'>
          <img
            src='./img/error.jpg'
            alt='ERROR'
            className='img-fluid'
            style={{ height: '70vh' }}
          />
        </div>
        <h5 className='text-center text-danger'>
          Unfortunately the page you are looking for has been moved or deleted
        </h5>
      </div>
    );
  }
}
