export const LOGIN = 'LOGIN'
export const SINGOUT = 'SIGNOUT'

// actions

export function login (user, password) {
  return {
    type: LOGIN,
    user: user,
    password: password
  }
}

export function signOut () {
  return {
    type: SINGOUT
  }
}

export const actions = {
  login,
  signOut
}