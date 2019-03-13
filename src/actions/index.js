import JsonPlaceholder from "../api/JsonPlaceholder";

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  getState().postsReducer
    .map(post => post.userId)
    .filter((userId, index, userIds) => userIds.indexOf(userId) === index)
    .forEach(userId => dispatch(fetchUser(userId)));
}

export const fetchPosts = () => async dispatch => {
  const response = await JsonPlaceholder.get('/posts');
  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  })
};

export const fetchUser = (id) => async dispatch => {
  const response = await JsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: response.data
  })
};