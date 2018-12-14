import { userConstants } from "../constants";
const initialState = {
  authenticaed: false,
  user: { username: "", name: "", firstname: "", myServers: [] }
};

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      console.log(action);
      return {
        authenticated: true,
        user: {
          username: action.user.username,
          name: "",
          firstname: "",
          myServers: []
        }
      };
    case userConstants.LOGOUT:
      return {
        initialState
      };
    default:
      return null;
  }
}
