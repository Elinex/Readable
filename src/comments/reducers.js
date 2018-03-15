import {
  GET_COMMENTS,
  ADD_COMMENT,
  EDIT_VOTE_COMMENT,
  EDIT_COMMENT
} from './actions'

export const comments = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        [action.postId]: action.commentsList
      }
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: [action.comment.id].concat(action.comment)
      }
    case EDIT_VOTE_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: state[action.comment.parentId].filter(comment =>
          (comment.id !== action.comment.id)).concat(action.comment)
      }
    case EDIT_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: state[action.comment.parentId].filter(comment =>
          (comment.id !== action.comment.id)).concat(action.comment)
      }
    default:
      return state
  }
}
