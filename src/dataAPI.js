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

// | `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
export const editPostAPI = (id, post) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: headersPost,
    body: JSON.stringify(post)
  }).then(res => res.json())

// | `POST /comments` | Add a comment to a post. | **id** - Any unique ID.
// As with posts, UUID is probably the best here. <br>
// **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br>
// **author** - [String] <br> **parentId** - Should match a post id in the database. |
export const addCommentAPI = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: headersPost,
    body: JSON.stringify(comment)
  }).then(res => res.json())
