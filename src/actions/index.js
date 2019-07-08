import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState)  => {
  await dispatch(fetchPosts()); // wait for list of posts by adding 'await'.
  console.log(getState().posts);
  console.log('fetched posts!');
  // use lodash list of unique userId's using lodash's map version.
  // since we are interested only for the userId's in posts, we add that argument in the _.map.
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  console.log(userIds);
  // We then iterate over the list of id and every user id, we fetch fetchUser action creator.
  userIds.forEach(id => dispatch(fetchUser(id)));
  // no need for await keyword since there will be no codes that will follow
  // that will need info from running dispatch(fetchUser(id)).
  // The dispatch(fetchUser(id)) will then fill-in state.users with user objects.

  // We can also use lodash's chain and value() method to refactor above code.
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value()
}

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

// // memoizing the fetch function, the new code is shown below:
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// // _ means this is a private function.
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: response.data})
// })

// following code below is just a stub action.
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// }
