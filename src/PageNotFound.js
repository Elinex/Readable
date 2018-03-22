import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = (props) => {
  return (
    <div>
      <h2>Page not found</h2>
      <center><Link to="/">Return to Home Page</Link></center>
    </div>
  )
}

export default PageNotFound
