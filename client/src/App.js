import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { Container } from 'reactstrap';
import AddCategory from "./components/AddCategory";

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Switch>
          <Route path="/categories/add" component={AddCategory} />
        </Switch>
      </Container>
    );
  }
}

export default App;
