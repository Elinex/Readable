import {
  GET_COMMENTS,
  ADD_COMMENT,
  EDIT_VOTE
} from './actions'

export const comments = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return state.concat(action.commentsList)
    case ADD_COMMENT:
      return state.concat(action.comment)
    case EDIT_VOTE:
      return state.map(comment => {
        if ((action.comment) && (comment) && (comment.id === action.comment.id)) {
          comment.voteScore = action.comment.voteScore
          return comment
        }
        return comment
      })
    default:
      return state
  }
}
