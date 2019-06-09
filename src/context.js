import React, { Component } from 'react';
import { Products } from './data';
const Context = React.createContext();
export class Provider extends Component {
  state = {
    products: Products
  };

  render() {
    return (
      <div>
        <Context.Provider value={this.state.products}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
