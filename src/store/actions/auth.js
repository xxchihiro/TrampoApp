import {
  NET_REGISTER_BEGIN,
  NET_REGISTER_FAIL,
  NET_REGISTER_SUCCESS,
  NET_LOGIN_BEGIN,
  NET_LOGIN_SUCCESS,
  NET_LOGIN_FAIL
} from "./actionTypes";

export const netRegisterBegin = () => {
  return {
    type: NET_REGISTER_BEGIN
  };
};

export const netRegisterSuccess = (UserId, UserName, QrcodeId, QrcodeSvg) => {
  return {
    type: NET_REGISTER_SUCCESS,
    payload: {
      UserId,
      UserName,
      QrcodeId,
      QrcodeSvg
    }
  };
};

export const netRegisterFail = () => {
  return {
    type: NET_REGISTER_FAIL
  };
};

export const netLoginBegin = () => {
  return {
    type: NET_LOGIN_BEGIN
  };
};

export const netLoginSuccess = json => {
  const { access_token, token_type, expires_in, userName } = json;
  return {
    type: NET_LOGIN_SUCCESS,
    payload: {
      access_token,
      token_type,
      expires_in,
      userName
    }
  };
};

export const netLoginFail = () => {
  return {
    type: NET_LOGIN_FAIL
  };
};

export const netGetUserInfo = (userInfo) => {
    return {
        type: NET_GET_USER_INFO,
        payload: {
            userInfo
        }
      };
}