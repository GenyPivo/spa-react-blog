import { combineReducers } from 'redux';
import categories from './reducers/categories'
import comments from './reducers/comments'

export default combineReducers({
  categories,
  comments
});
