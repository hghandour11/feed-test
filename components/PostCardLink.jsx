import React from 'react'
import PropTypes from 'prop-types'

const PostCardLink = ({ post }) => {
  return (
    <div>
      Link: {post.permalink_url}
    </div>
  )
}

export default PostCardLink
