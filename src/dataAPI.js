const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Whatever'
}

const headersPost = {
  'Accept': 'application/json',
  'Authorization': 'Whatever',
  'Content-Type': 'application/json'
}

export const getCategoriesAPI = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

export const postPostAPI = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headersPost,
    body: JSON.stringify(post)
  }).then(res => res.json())

export const getPostsAPI = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getCommentsAPI = (parentId) =>
  fetch(`${api}/posts/${parentId}/comments`, { headers })
  .then(res => res.json())

export const removePostAPI = (postID) =>
  fetch(`${api}/posts/${postID}`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(postID)
  }).then(res => res.json())
