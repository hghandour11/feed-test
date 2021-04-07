import React from 'react'
import PropTypes from 'prop-types'

const Sidepanel = ({ content, setContent }) => {
  if (!content) return null
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-end items-center"
      style={{ zIndex: 2 }}
    >
      <button
        className="absolute top-0 left-0 w-full h-full bg-black" style={{ opacity: 0.4 }}
        onClick={() => setContent(null)}
      />
      <div className="bg-white max-w-3xl relative" style={{ height: '80%', width: '80%', zIndex: 2 }}>
        {content}
      </div>
    </div>
  )
}

export default Sidepanel
