export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

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

export function updateCategory(category) {
  return {
    type: UPDATE_CATEGORY,
    category
  }
}

export function deleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    categoryId: id
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
  return () => {
    return fetch('/api/v1/categories', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse);
  }
}

export function editCategory(data, id) {
  return () => {
    return fetch(`/api/v1/categories/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse);
  }
}

export function destroyCategory(id) {
  return dispatch => {
    return fetch(`/api/v1/categories/${id}`, {
      method: 'delete',
      body: '',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(() => dispatch(deleteCategory(id)));
  }
}
