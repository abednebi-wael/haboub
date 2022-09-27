
import axios from "axios";
import {
  ADD_USER,
  ADD_USER_FAILED,
  ADD_USER_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  LOG_OUT,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
} from "../constants/actionTypes";

export const addUser = (newUser) => async (dispatch) => {
  dispatch({ type: ADD_USER });
  try {
    const res = await axios.post(
      "http://localhost:7000/user/register",
      newUser
    );
    dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_USER_FAILED, payload: error.response.data });
  }
};

export const userLogin = (userCard) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });
  try {
    const res = await axios.post(
        "http://localhost:7000/user/login", 
        userCard);
    localStorage.setItem("token", res.data.token);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED });
    console.log(error);
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE })
  const config = {
      headers: {
          Authorization: localStorage.getItem('token')
      }
  }
  try {
      const res = await axios.get('http://localhost:5000/user/currentuser', config)
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data })
  } catch (error) {
      dispatch({ type: GET_PROFILE_FAILED, payload: error.response.data })
  }
}

export const logout = () => (dispatch) => {
  dispatch({type :LOG_OUT})
  try {
    localStorage.removeItem("token")
  } catch (error) {
    console.log(error)
  }
}