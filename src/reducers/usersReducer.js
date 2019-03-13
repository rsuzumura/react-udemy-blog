import { FETCH_USER } from "../actions";

export default (users = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      const newUsers = { ...users };
      newUsers[action.payload.id] = action.payload;
      return newUsers;
    default:
      return users;
  }
}