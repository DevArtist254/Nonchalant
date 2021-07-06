import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
} from "./user.types"

const INIT_STATE = {
  token: null,
  isAuthenticated: null,
  loading: true,
  currentUser: null,
}

const userReducer = (state = INIT_STATE, action) => {
  const {type, payload} = action

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        currentUser: payload,
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        //old update
        ...state,
        token: payload,
        //new update
        isAuthenticated: true,
        loading: false,
      }
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        currentUser: null,
      }
    default:
      return state
  }
}

export default userReducer
