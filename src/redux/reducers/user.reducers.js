import { userConstants } from "../constants";

export function logmein(state = null, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        loggingIn: true,
        user: action.user
      };
    default:
      return null;
  }
}
