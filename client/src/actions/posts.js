export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  }
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    postId: id
  }
}

export function getPosts(id) {
  return dispatch => {
    fetch(`/api/v1/categories/${id}/posts`)
      .then(res => res.json())
      .then(data => dispatch(setPosts(data)));
  }
}

export function editPost(data, id) {
  return dispatch => {
    return fetch(`/api/v1/posts/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(data => dispatch(updatePost(data)));
  }
}

export function savePost(data, id) {
  return dispatch => {
    return fetch(`/api/v1/categories/${id}/posts`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(data => dispatch(addPost(data)));
  }
}

export function destroyPost(id) {
  return dispatch => {
    return fetch(`/api/v1/posts/${id}`, {
      method: 'delete',
      body: '',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(() => dispatch(deletePost(id)));
  }
}
