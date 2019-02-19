import {
  netRegisterBegin,
  netRegisterFail,
  netRegisterSuccess,

  netLoginBegin,
  netLoginSuccess,
  netLoginFail,

  netGetUserInfo
} from "../actions/auth";
import jstz from "jstz";
import {AsyncStorage} from 'react-native'

export function register(
  Email,
  GivenName,
  FamilyName,
  Password,
  ConfirmPassword,
  successCB,
  failCB
) {
  return async dispatch => {
    dispatch(netRegisterBegin());
    const Timezone = jstz.determine().name();
    try {
      const raw = await fetch("http://api.trampo.com.au/v1/Account/Register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Email,
          GivenName,
          FamilyName,
          Password,
          ConfirmPassword,
          Timezone
        })
      });

      const json = await raw.json();
      if (raw.status === 400) {
        throw new Error(JSON.stringify(json));
      }
      dispatch(netRegisterSuccess(...json));
      successCB();
    } catch (e) {
      dispatch(netRegisterFail());
      failCB(JSON.parse(e.message).ModelState);
    }
  };
}

export function login(Email, Password, successCB, failCB) {
  return async dispatch => {
    dispatch(netLoginBegin());
    try {
      const raw = await fetch("http://api.trampo.com.au/Token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `grant_type=password&username=${Email}&password=${Password}`
      });
      const raw_text = await raw.text();
      const json = JSON.parse(raw_text)
      console.log(json)
      if (raw.status === 400) {
        throw new Error(JSON.stringify(json));
      }
      dispatch(netLoginSuccess(json));
      successCB(json.access_token);
    } catch (e) {
      dispatch(netLoginFail());
      failCB(JSON.parse(e.message).error_description);
    }
  };
}

export function getUserInfo(){
    return async dispatch => {
        const token = await AsyncStorage.getItem('token')
        try {
          const raw = await fetch("http://api.trampo.com.au/v1/Account/UserInfo", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Authorization": `bearer ${token}`
            },
          });
          const json = await raw.json();
          console.log(json)
          if (raw.status === 400) {
            throw new Error(JSON.stringify(json));
          }
          netGetUserInfo(json)
        } catch (e) {
        }
      };
}