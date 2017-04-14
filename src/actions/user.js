import { api } from './common.js'
export const LOGIN = 'LOGIN'
export const SINGOUT = 'SIGNOUT'
export const CHEAK_IF_LOGIN = "CHEAK_IF_LOGIN"

// actions
export function cheakIfLogin() {
   return async (dispatch, getStore) => {
        const result = await api({
            dispatch,
            getStore,
            url: '/api/project/signin',
        });

        dispatch({
            type: CHEAK_IF_LOGIN,
        })

        console.log(result);ƒ
        return result;
    };
}

export function login(user, password) {
  return {
    type: LOGIN,
    user: user,
    password: password
  }
}

export function signOut() {
  return {
    type: SINGOUT
  }
}

export const actions = {
  login,
  signOut
}