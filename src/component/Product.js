import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { title, price, img_url } = this.props.product;
    console.log(img_url);
    return (
      <div>
        <img src={img_url} alt='product_image' />
        <h5>{title}</h5>
        <p>Price ${price}</p>
      </div>
    );
  }
}
