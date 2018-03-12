export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_VOTE_COMMENT = 'EDIT_VOTE_COMMENT'

export const getCommentsAction = (commentsList) => {
  return {
    type: GET_COMMENTS,
    commentsList
  }
}

export const addCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const voteCommentAction = (comment) => {
  return {
    type: EDIT_VOTE_COMMENT,
    comment
  }
}
