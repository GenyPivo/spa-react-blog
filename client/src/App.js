import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AddCategory from "./components/AddCategory";
import Categories from "./components/Categories";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/categories/add" component={AddCategory} />
        </Switch>
      </div>
    );
  }
}

export default App;
