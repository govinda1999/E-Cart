import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './component/NavBar';
import Cart from './component/Cart';
import ProductList from './component/ProductList';
import PageNotFound from './component/PageNotFound';
import Details from './component/Details';
import { Provider, Context } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  static contextType = Context;
  state = {
    id: 2
  };
  render() {
    return (
      <Provider>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path='/' component={ProductList} exact />
            <Route path='/cart' component={Cart} exact />
            <Route
              path='/details'
              render={props => <Details id={this.state.id} />}
              exact
            />
            <Route component={PageNotFound} />
          </Switch>
        </React.Fragment>
      </Provider>
    );
  }
  // componentDidMount() {
  //   this.setState({ id: this.context.id });
  // }
}

export default App;
