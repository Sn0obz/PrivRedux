import { userConstants } from "../constants/user.constants";

export function Login(username, password) {
  return {
    type: "LOGIN",
    user: {
      username: username
    }
  };
}
export function Logout() {
  return {
    type: "LOGOUT",
    user: {
      username: ""
    }
  };
}
