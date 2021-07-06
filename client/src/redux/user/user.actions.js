import {setTokenStorage} from "./user.utils"
import axios from "axios"
import api from "../utils/api.inter"
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./user.types"

// Load User
export const loadUser = (token) => async (dispatch) => {
  try {
    const api = axios.create({
      baseURL: "http://localhost:5000/api",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${JSON.parse(token)}`,
      },
    })
    //response back with the user
    const res = await api.get("/auth")

    //an auth user is sent to the state
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

// Register User
export const register = (formData, history) => async (dispatch) => {
  try {
    //take our form data and post it to the backend
    const res = await api.post("/user", formData)

    //the response back with a token containing the user
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    })

    //convert JSON
    let token = JSON.stringify(res.data.token)

    setTokenStorage(token)
    history.push("/")
  } catch (err) {
    const errors = err.response.data.errors

    console.log(errors)
    dispatch({
      type: REGISTER_FAIL,
    })
  }
}

// Login User
export const login = (ceredentials, history) => async (dispatch) => {
  //Clear local storage if their is any token
  localStorage.removeItem("token")
  try {
    const res = await api.post("/auth", ceredentials)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })

    //convert JSON
    let token = JSON.stringify(res.data.token)

    setTokenStorage(token)
    history.push("/")
  } catch (err) {
    const errors = err.response.data.errors

    console.log(errors)
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

// Logout
export const logout = () => ({type: LOGOUT})
