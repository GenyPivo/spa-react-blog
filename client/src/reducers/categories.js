import {SET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY} from "../actions/categories";

export function updateByNew(source, element) {
  let output = [];
  source.forEach(function (el) {
    if (el.id === element.id) {
      output.push(element)
    } else {
      output.push(el)
    }
  });
  return output;
}

export default function categories(state = [], action = {}) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
    case ADD_CATEGORY:
      return {
        list: [...state.list, action.category],
        fetched: state.fetched
      };
    case DELETE_CATEGORY:
      return {
        list: state.list.filter(v => v.id !== action.categoryId),
        fetched: state.fetched
      };
    case UPDATE_CATEGORY:
      return {
        list: updateByNew(state.list, action.category),
        fetched: state.fetched
      };
    default: return state;
  }
}
