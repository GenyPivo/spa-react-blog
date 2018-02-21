import { savePost } from "../../actions/posts";
import { connect } from "react-redux";
import PostForm from './PostForm';

class AddPost extends PostForm {
  constructor() {
    super();
    this.state = {
      ...this.state,
      topTitle: 'Add new post'
    }
  }

  sendRequestFunction() {
    return this.props.savePost;
  }

  resourceId() {
    return this.props.match.params.id;
  }
}

export default connect(null, { savePost })(AddPost);

