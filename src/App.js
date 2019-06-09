import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './component/NavBar';
import Cart from './component/Cart';
import ProductList from './component/ProductList';
import PageNotFound from './component/PageNotFound';
import Details from './component/Details';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path='/' component={ProductList} exact />
        <Route path='/cart' component={Cart} exact />
        <Route path='/details' component={Details} exact />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
