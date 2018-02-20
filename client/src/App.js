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
import { addComment } from './actions/comments'

class App extends Component {

  parseMessage = (message) => {
    console.log(message);
    console.log(this);
    if (message.hasOwnProperty('category')) {
      this.props.addCategory(message.category);
    }

    if (message.hasOwnProperty('comment')) {
      this.props.addComment(message.comment);
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

function mapStateToProps(state) {
  return {
    categories: state.categories,
    comments: state.comments
  }
}

export default withRouter(connect(mapStateToProps, { addCategory, addComment })(App));
