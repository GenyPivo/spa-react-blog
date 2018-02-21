import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import { editCategory } from "../../actions/categories";

class EditCategory extends CategoryForm {
  constructor() {
    super();
    this.state = {
      ...this.state,
      topTitle: 'Update category'
    }
  }

  componentDidMount() {
    const categories = this.props.categories;
    const categoryId = this.props.match.params.id;
    let category = false;

    if (categories.hasOwnProperty('list')) {
      category = categories.list.find(x => x.id.toString() === categoryId);
    }

    if (category) {
      this.setState({name: category.name, description: category.description})
    } else {
      fetch(`/api/v1/categories/${categoryId}`)
        .then(res => res.json())
        .then(data => this.setState({name: data.name, description: data.description}));
    }
  }

  sendRequestFunction() {
    const { name, description } = this.state;
    const categoryId =  this.props.match.params.id;
    return this.props.editCategory({name: name, description: description}, categoryId)
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, { editCategory })(EditCategory);
