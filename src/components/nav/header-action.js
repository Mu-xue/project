export const HEADER_LOGIN = 'HEADER_LOGIN'
export const HEADER_SINGOUT = 'HEADER_SIGNOUT'

// actions

export function login (user, password) {
  return {
    type: HEADER_LOGIN,
    user: user,
    password: password
  }
}

export function signOut () {
  return {
    type: HEADER_SINGOUT
  }
}

export const actions = {
  login,
  signOut
}