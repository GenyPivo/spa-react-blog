import {SET_CATEGORIES, ADD_CATEGORY} from "../actions/categories";

export default function categories(state = [], action = {}) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
    case ADD_CATEGORY:
      return [
        ...state,
        action.category,
      ];
    default: return state;
  }
}