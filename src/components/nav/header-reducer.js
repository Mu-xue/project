import {
  HEADER_SINGOUT,
  HEADER_LOGIN
} from './header-action'

export default function headerReducer(state = initeState, action) {
  switch (action.type) {
    case HEADER_LOGIN:
      return {
        isLogin: true,
        user: action.user,
        password: action.password
      }
      break
    case HEADER_SINGOUT:
      return {
        isLogin: false,
        user: null,
        password: null
      }
      break
    default:
      return state
  }
}