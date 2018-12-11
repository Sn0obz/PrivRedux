import { userConstants } from "../constants/user.constants";

export const logmein = user => ({ type: userConstants.LOGIN, payload: user });
