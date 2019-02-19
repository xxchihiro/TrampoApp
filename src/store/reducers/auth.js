import {
  NET_REGISTER_BEGIN,
  NET_REGISTER_SUCCESS,
  NET_REGISTER_FAIL,
  NET_LOGIN_BEGIN,
  NET_LOGIN_SUCCESS,
  NET_LOGIN_FAIL,
  NET_GET_USER_INFO
} from "../actions/actionTypes";

const initialState = {
  logined: false,
  userInfo: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NET_REGISTER_SUCCESS:
      console.log(action.payload);
      return {
        ...state
      };
    case NET_LOGIN_SUCCESS:
    return {
        ...state,
        logined: true,
        userInfo: action.payload
      };
      case NET_GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo
      };
    default:
      return state;
  }
};

export default reducer;
