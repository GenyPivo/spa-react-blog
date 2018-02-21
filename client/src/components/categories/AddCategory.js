import { connect } from 'react-redux';
import { saveCategory } from '../../actions/categories';
import CategoryForm from './CategoryForm';

class AddCategory extends CategoryForm {
  constructor() {
    super();
    this.state = {
      ...this.state,
      topTitle: 'Add new category'
    }
  }
  sendRequestFunction() {
    const { name, description } = this.state;
    return this.props.saveCategory({name: name, description: description})
  }
}

export default connect(null, { saveCategory })(AddCategory);
