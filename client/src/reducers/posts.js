import {SET_POSTS, ADD_POST} from "../actions/posts";

export default function categories(state = [], action = {}) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    case ADD_POST:
      return [
        ...state,
        action.post,
      ];
    default: return state;
  }
}