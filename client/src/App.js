import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/Header'
import AddCategory from "./components/AddCategory";
import Categories from "./components/Categories";
import {ActionCable} from 'react-actioncable-provider'
import { connect } from 'react-redux';
import { addCategory } from './actions/categories';
import AddComment from './components/AddComment';
import Comments from './components/Comments';
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

class App extends Component {
  onReceived = (message) => {
    this.props.addCategory(message.category);
  };

  render() {
    return (
      <div>
        <ActionCable ref='notify_channel' channel={{channel: 'NotifyChannel'}} onReceived={this.onReceived} />
        <Header/>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/categories/add" component={AddCategory} />
          <Route exact path="/categories/:id/comments/" component={Comments} />
          <Route exact path="/categories/:id/comments/new" component={AddComment} />
          <Route exact path="/categories/:id/posts/" component={Posts} />
          <Route exact path="/categories/:id/posts/new" component={AddPost} />
          <Route exact path="/posts/:id/comments" component={Comments} />
          <Route exact path="/posts/:id/comments/new" component={AddComment} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, { addCategory })(App));
