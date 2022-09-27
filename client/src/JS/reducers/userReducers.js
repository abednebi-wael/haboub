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
const initialState ={
  load : false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
    case USER_LOGIN:
      case GET_PROFILE:
      return { ...state,  };

    case ADD_USER_FAILED:
    case USER_LOGIN_FAILED:
    case GET_PROFILE_FAILED:
      return { ...state, error: action.payload };
    case ADD_USER_SUCCESS:
      return { ...state, msg: action.payload };
    case USER_LOGIN_SUCCESS:
        return {...state, token:action.payload.token,isAuth:true}
        case GET_PROFILE_SUCCESS:
          return { ...state, loading: false, user: action.payload, isAuth: true }
    case LOG_OUT :
      return {...state, isAuth:false}
    default:
      return state;
  }
};

export default userReducer;
