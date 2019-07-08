import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// for fetching with axios, ensure the 'async' and 'await' commands are included.
// fetchPosts function returns a function in the code below.
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({type: 'FETCH_POSTS', payload: response.data})
};

// Note: fetchPosts returns an array of data.
// for fetchUser, we note that the url returns only 1 object.
// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: response.data})
// };

// memoizing the fetch function, the new code is shown below:
export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

// _ means this is a private function.
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data})
})

// following code below is just a stub action.
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// }
