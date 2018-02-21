import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/Header'
import AddCategory from "./components/categories/AddCategory";
import Categories from "./components/categories/Categories";
import {ActionCable} from 'react-actioncable-provider'
import { connect } from 'react-redux';
import { addCategory, updateCategory } from './actions/categories';
import AddComment from './components/comments/AddComment';
import Comments from './components/comments/Comments';
import Posts from "./components/posts/Posts";
import AddPost from "./components/posts/AddPost";
import FullPost from "./components/posts/FullPost";
import EditPost from './components/posts/EditPost';
import EditCategory from './components/categories/EditCategory';

class App extends Component {

  parseMessage = (message) => {
    if (message.hasOwnProperty('category') && message.action === 'create') {
      this.props.addCategory(message.category);
    }

    if (message.hasOwnProperty('category') && message.action === 'update') {
      this.props.updateCategory(message.category);
    }
  };

  onReceived = (message) => {
    this.parseMessage(message);
  };

  render() {
    return (
      <div>
        <ActionCable ref='notify_channel' channel={{channel: 'NotifyChannel'}} onReceived={this.onReceived} />
        <Header/>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route exact path="/categories/add" component={AddCategory} />
          <Route exact path="/categories/:id/edit" component={EditCategory} />
          <Route exact path="/categories/:id/comments/" component={Comments} />
          <Route exact path="/categories/:id/comments/new" component={AddComment} />
          <Route exact path="/categories/:id/posts/" component={Posts} />
          <Route exact path="/categories/:id/posts/new" component={AddPost} />
          <Route exact path="/posts/:id/comments" component={Comments} />
          <Route exact path="/posts/:id/comments/new" component={AddComment} />
          <Route exact path="/posts/:id" component={FullPost} />
          <Route exact path="/posts/:id/edit" component={EditPost} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    comments: state.comments
  }
}

export default withRouter(connect(mapStateToProps, { addCategory, updateCategory })(App));
