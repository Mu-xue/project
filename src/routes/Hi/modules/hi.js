// ------------------------------------
// Constants
// ------------------------------------
export const Hi_addLikes = 'Hi_addLikes'
export const Hi_addComments = 'Hi_addComments'
export const Hi_removeComment = 'Hi_removeComment'

// ------------------------------------
// Actions
// ------------------------------------
export function addLikes (value = 1) {
  return {
    type  : Hi_addLikes,
    likes : value
  }
}

export function addComments (text = ''){
  return {
    type: Hi_addComments,
    text
  }
}

export function removeComment (index =-1){
  return {
    type: Hi_removeComment,
    index
  }
}

export const actions = {
  addLikes,
  addComments,
  removeComment
}

const initialState = {
  likes: 0,
  comments:[]
}

export default function hiReducer (state = initialState, action) {
  switch (action.type) {
    case 'Hi_addLikes':
      return {
        likes: state.likes + action.likes,
        comments: state.comments,
      }
    case 'Hi_addComments':
      return {
        likes: state.likes,
        comments: [...state.comments , action.text],
      }
    case 'Hi_removeComment':
      return {
        likes: state.likes,
        comments: [...state.comments.slice(0,action.index) , ...state.comments.slice(action.index+1)],
        index:state.index
      }
    default:
      return state
  }
}