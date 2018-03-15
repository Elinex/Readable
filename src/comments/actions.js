export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export const getCommentsAction = (postId, commentsList) => {
  return {
    type: GET_COMMENTS,
    postId,
    commentsList
  }
}

export const editCommentAction = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export const addCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}
