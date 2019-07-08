import jsonPlaceholder from '../apis/jsonPlaceholder';

// for fetching with axios, ensure the 'async' and 'await' commands are included.
// fetchPosts function returns a function in the code below.
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({type: 'FETCH_POSTS', payload: response.data})
};

// Note: fetchPosts returns an array of data.
// for fetchUser, we note that the url returns only 1 object.
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data})
};

export const selectPost = () => {
  return {
    type: 'SELECT_POST'
  }
}
