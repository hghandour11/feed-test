import React from "react";
import PropTypes from "prop-types";

const PostCardData = ({ post }) => {
  const getTotalNumber = (engagements) => {
    let totalNumber = 0;
    for (let i in engagements) {
      totalNumber += engagements[i];
    }

    return totalNumber;
  };

  return (
    <div className="content-container">
      <div className="menu-score-container">
        <div className="circle-container">
          <span>score</span>
          <span className="score">{post.engagement_score}</span>
        </div>
      </div>

      <div className="table-container">
        <div className="row-container">
          <span style={{ width: "60%" }}>{post.metrics.engagement.title}</span>
          <span>{getTotalNumber(post.metrics.engagement.data)}</span>
        </div>
        <div className="row-container remove-border-top">
          <span style={{ width: "60%" }}>{post.metrics.impressions.title}</span>
          <span>{getTotalNumber(post.metrics.impressions.data)}</span>
        </div>

        <div className="row-container remove-border-top">
          <span style={{ width: "60%" }}>{post.metrics.reach.title}</span>
          <span>{getTotalNumber(post.metrics.reach.data)}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCardData;
