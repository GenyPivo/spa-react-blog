import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AddCategory from "./components/AddCategory";
import Categories from "./components/Categories";
import {ActionCable} from 'react-actioncable-provider'

class App extends Component {
  onReceived(msg) {

  }

  render() {
    return (
      <div>
        <ActionCable ref='notify_channel' channel={{channel: 'NotifyChannel'}} onReceived={this.onReceived} />
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
