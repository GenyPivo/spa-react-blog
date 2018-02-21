import PostForm from './PostForm';
import { editPost } from "../../actions/posts";
import { connect } from 'react-redux';

class EditPost extends PostForm {
  constructor() {
    super();
    this.state = {
      ...this.state,
      topTitle: 'Update post'
    }
  }

  categoryId = 0;

  componentDidMount() {
    const posts = this.props.posts;
    const postId = this.props.match.params.id;
    const post = posts.find(x => x.id.toString() === postId);
    if (post) {
      this.categoryId = post.category_id;
      this.setState({name: post.name, content: post.content})
    } else {
      fetch(`/api/v1/posts/${postId}`)
        .then(res => res.json())
        .then(data => this.setState({name: data.name, content: data.content}));
    }
  }

  resourceId() {
    return this.categoryId;
  }

  sendRequestFunction() {
    return this.props.editPost;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { editPost })(EditPost);