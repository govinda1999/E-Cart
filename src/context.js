import React, { Component } from 'react';
import { Products } from './data';
export const Context = React.createContext();
export class Provider extends Component {
  state = {
    products: Products,
    id: 1
  };

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
