import {SET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST} from "../actions/posts";

export default function categories(state = [], action = {}) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    case ADD_POST:
      return [
        ...state,
        action.post,
      ];
    case UPDATE_POST:
      return [
        ...state.filter(v => (v.id !== action.post.id)),
        action.post
      ];
    case DELETE_POST:
      return state.filter(v => v.id !== action.postId);

    default: return state;
  }
}