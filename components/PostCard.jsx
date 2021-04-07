import React, { useState } from "react";
import PropTypes from "prop-types";

import FacebookIcon from "@/FacebookIcon";
import InstagramIcon from "@/InstagramIcon";
import LinkIcon from "@/LinkIcon";
import TickIcon from "@/TickIcon";
import InsightsIcon from "@/InsightsIcon";
import PostCardData from "@/PostCardData";
import PostCardLink from "@/PostCardLink";

import brandColors from "@/constants/brandColors";

import moment from "moment";

const PostCard = ({ post, setContent }) => {
  console.log("post", post);
  const [imageUrl, setImageUrl] = useState(post.thumbnails[0].url);
  const [promoEnabled, setPromoEnabled] = useState(post.promotion_enabled);
  const formattedPublishedTime = moment(post.published_time).format(
    "DD MMM YYYY"
  );

  const iconRenderer = (platform) => {
    switch (platform) {
      case "facebook":
        return (
          <FacebookIcon className="h-4 w-auto" fill={brandColors.facebook.bg} />
        );

      case "instagram":
        return (
          <InstagramIcon
            className="h-4 w-auto"
            fill={brandColors.instagram.bg}
          />
        );

      default:
        break;
    }
  };

  const checkAltImage = () => {
    if (post.thumbnails.length > 1) {
      setImageUrl(post.thumbnails[1].url);
    }
  };

  const renderStory = () => {
    return (
      <div className="storyContainer rounded-dialogue mb-4">
        {/* <img src={post.thumbnails[0].url} className="blurredBackground" /> */}

        <div className="imageContainer">
          <img src={post.thumbnails[0].url} className="storyImage" />
        </div>
      </div>
    );
  };

  const renderPost = () => {
    return (
      <div className="rounded-dialogue mb-4">
        <img src={imageUrl} onError={() => checkAltImage()} />
      </div>
    );
  };

  return (
    <div className="col-span-3">
      <div className="tab">
        {iconRenderer(post.platform)}

        <p>{formattedPublishedTime}</p>
      </div>

      {post.post_type === "story" ? renderStory() : renderPost()}

      <div className="p-2 border border-solid border-green score-container mb-4">
        <p>Score</p>
        <p>{post.engagement_score}</p>
      </div>

      <button
        className={`p-2 enable-container mb-4 ${
          promoEnabled ? "bg-blue" : "bg-grey"
        }`}
        onClick={() => {
          setPromoEnabled(!promoEnabled);
        }}
      >
        <p>Enable</p>
        <div className="w-5 h-5 p-1 bg-white">
          {promoEnabled && (
            <TickIcon className="w-full h-auto" fill={brandColors.blue} />
          )}
        </div>
      </button>

      <div className="flex">
        <button
          className="h-12 bg-green mr-3 flex-grow"
          onClick={() => {
            setContent(<PostCardLink post={post} />);
          }}
        >
          <LinkIcon className="w-5 h-auto" fill={brandColors.white} />
        </button>
        <button
          className="h-12 bg-green flex-grow"
          onClick={() => {
            // TODO: open the sidepanel with PostCardData as its content
            setContent(<PostCardData post={post} />);
          }}
        >
          <InsightsIcon className="w-5 h-auto" fill={brandColors.white} />
        </button>
      </div>
    </div>
  );
};

PostCard.propTypes = {};

export default PostCard;
