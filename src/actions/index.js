import jsonPlaceholder from '../apis/jsonPlaceholder';

// for fetching with axios, ensure the 'async' and 'await' commands are included.
// fetchPosts function returns a function in the code below.
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({type: 'FETCH_POSTS', payload: response})
};

export const selectPost = () => {
  return {
    type: 'SELECT_POST'
  }
}
