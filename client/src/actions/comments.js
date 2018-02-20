export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function addComment(comment) {
  return {
    type: ADD_CATEGORY,
    comment
  }
}

export function setComments(categories) {
  return {
    type: SET_CATEGORIES,
    categories: categories,
    fetched: true
  }
}

export function getComments(id) {
  return dispatch => {
    fetch('api/v1/categories')
      .then(res => res.json())
      .then(data => dispatch(setComments(data)));
  }
}

export function saveComment(data) {
  return dispatch => {
    console.log(data);
    return fetch(`/api/v1/${data.params.resource}/${data.params.id}/comments`, {
      method: 'post',
      body: JSON.stringify(data.data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(data => dispatch(addComment(data.data)));
  }
}
