export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

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
    type: ADD_COMMENT,
    comment
  }
}

export function setComments(comments) {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export function getComments(id, resource) {
  return dispatch => {
    fetch(`/api/v1/${resource}/${id}/comments`)
      .then(res => res.json())
      .then(data => dispatch(setComments(data)));
  }
}

export function saveComment(data) {
  return dispatch => {
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
