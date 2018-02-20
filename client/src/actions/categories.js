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

export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    category
  }
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories: {
      list: categories,
      fetched: true
    }
  }
}

export function getCategories() {
  return dispatch => {
    fetch('api/v1/categories')
      .then(res => res.json())
      .then(data => dispatch(setCategories(data)));
  }
}

export function saveCategory(data) {
  return dispatch => {
    return fetch('/api/v1/categories', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse);
  }
}
