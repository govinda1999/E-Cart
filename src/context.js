import React, { Component } from 'react';
import { Products } from './data';
export const Context = React.createContext();

export class Provider extends Component {
  state = {
    products: [],
    detailpage: Products[0],
    modalopen: false,
    modalproduct: Products[0],
    cart: [],
    cartsubtotal: 0,
    tax: 0,
    carttotal: 0
  };
  openmodal = id => {
    const temp = this.getproduct(id);
    this.setState(() => {
      return { modalopen: true, modalproduct: temp };
    });
  };
  closemodal = () => {
    this.setState(() => {
      return { modalopen: false };
    });
  };
  addtocart = id => {
    const tempproduct = [...this.state.products];
    const temp = this.getproduct(id);
    const index = tempproduct.indexOf(temp);
    tempproduct[index].incart = true;
    tempproduct[index].count = 1;
    tempproduct[index].total = tempproduct[index].price;
    this.setState(
      () => {
        return {
          cart: [...this.state.cart, tempproduct[index]],
          products: tempproduct
        };
      },
      () => this.calcTotal()
    );
  };
  detailid = (id, e) => {
    e.preventDefault();
    const temp = this.getproduct(id);
    this.setState(() => {
      return { detailpage: temp };
    });
  };
  getproduct = id => {
    return this.state.products.find(item => item.product_id === id);
  };
  increment = id => {
    let tempcart = [...this.state.cart];
    const select = tempcart.find(item => item.product_id === id);
    const index = tempcart.indexOf(select);
    let temp = tempcart[index];
    temp.count += 1;
    temp.total = temp.count * temp.price;
    this.setState(
      () => {
        return { cart: [...tempcart] };
      },
      () => this.calcTotal()
    );
  };
  decrement = id => {
    let tempcart = [...this.state.cart];
    const select = tempcart.find(item => item.product_id === id);
    const index = tempcart.indexOf(select);
    let temp = tempcart[index];
    temp.count -= 1;
    if (temp.count === 0) {
      this.removeItem(id);
    } else {
      temp.total = temp.count * temp.price;
      this.setState(
        () => {
          return { cart: [...tempcart] };
        },
        () => this.calcTotal()
      );
    }
  };
  removeItem = id => {
    let tempproduct = [...this.state.products];
    let tempcart = [...this.state.cart];
    tempcart = tempcart.filter(item => item.product_id !== id);
    const index = tempproduct.indexOf(this.getproduct(id));
    let removed = tempproduct[index];
    removed.incart = false;
    removed.total = 0;
    removed.count = 0;
    this.setState(
      () => {
        return { cart: [...tempcart], products: [...tempproduct] };
      },
      () => this.calcTotal()
    );
  };
  clearcart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setproduct();
        this.calcTotal();
      }
    );
  };
  calcTotal = () => {
    let sub = 0;
    this.state.cart.map(item => (sub += item.total));
    let tax = parseFloat((sub * 0.1).toFixed(2));
    let total = tax + sub;
    this.setState(() => {
      return { cartsubtotal: sub, carttotal: total, tax: tax };
    });
  };
  render() {
    return (
      <div>
        <Context.Provider
          value={{
            ...this.state,
            handler: this.addtocart,
            handler_detail: this.detailid,
            openmodal: this.openmodal,
            closemodal: this.closemodal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearcart: this.clearcart
          }}
        >
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
  componentDidMount() {
    this.setproduct();
  }
  setproduct = () => {
    let tempproducts = [];
    Products.forEach(item => {
      const single = { ...item };
      tempproducts = [...tempproducts, single];
    });
    this.setState(() => {
      return { products: tempproducts };
    });
  };
}

export const Consumer = Context.Consumer;
