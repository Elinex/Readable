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

  // app.put('/posts/:id', bodyParser.json(), (req, res) => {
  //     posts.edit(req.token, req.params.id, req.body)
  //       .then(
  //         (data) => res.send(data),
  //           (error) => {
  //               console.error(error)
  //               res.status(500).send({
  //                   error: 'There was an error.'
  //               })
  //           }
  //       )
  // })
