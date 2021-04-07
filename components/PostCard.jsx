import React from 'react'
import PropTypes from 'prop-types'

import FacebookIcon from '@/FacebookIcon'
import InstagramIcon from '@/InstagramIcon'
import LinkIcon from '@/LinkIcon'
import TickIcon from '@/TickIcon'
import InsightsIcon from '@/InsightsIcon'
import PostCardData from '@/PostCardData'
import PostCardLink from '@/PostCardLink'

import brandColors from '@/constants/brandColors'

const PostCard = ({ post }) => {
  console.log('post', post)
  return (
    <div className="col-span-3">

      <div>
        {/* TODO: change icon based on the post platform */}
        <FacebookIcon className="h-4 w-auto" fill={brandColors.facebook.bg} />
        {/* TODO: format date properly */}
        <p>{post.published_time}</p>
      </div>

      <div className="rounded-dialogue mb-4">
        {/* TODO: if the post is a story, restrict the height of the tall image and use a blurred version as a background */}
        {/* TODO: use fallback image if the first image has an error */}
        <img src={post.thumbnails[0].url} />
      </div>
      <div className="p-2 border border-solid border-green">
        <p>Score</p>
        <p>{post.engagement_score}</p>
      </div>

      {/* TODO: Make this button work */}
      <button
        className="bg-blue p-2"
        onClick={() => {
          console.log('Update `post.promotion_enabled`')
        }}
      >
        <p>Enable</p>
        <div className="w-5 h-5 p-1 bg-white">
          {post.promotion_enabled && (
            <TickIcon className="w-full h-auto" fill={brandColors.blue} />
          )}
        </div>
      </button>

      {/* TODO: make both buttons equal size but keep the same gap between them. */}
      <div className="flex">
        <button
          className="h-12 bg-green mr-6 flex-grow"
          onClick={() => {
            // TODO: open the sidepanel with PostCardLink as its content
            console.log('Open PostCardLink')
          }}
        >
          <LinkIcon className="w-4 h-auto" />
        </button>
        <button
          className="h-12 bg-green flex-grow"
          onClick={() => {
            // TODO: open the sidepanel with PostCardData as its content
            console.log('Open PostCardData')
          }}
        >
          <InsightsIcon className="w-4 h-auto" />
        </button>
      </div>
    </div>
  )
}

PostCard.propTypes = {

}

export default PostCard
