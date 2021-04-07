import React from "react";

import PostCard from "@/PostCard";
import Sidepanel from "@/Sidepanel";

import fetchPosts from "../api/fetchPosts";

const PostsPage = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(async () => {
    const posts = await fetchPosts();
    setPosts(posts);
  }, []);

  const [sidepanelContent, setSidepanelContent] = React.useState(null);

  return (
    <>
      <div className="grid grid-cols-14 gap-4">
        {posts.map((post) => {
          return <PostCard post={post} setContent={setSidepanelContent} />;
        })}
      </div>
      <Sidepanel content={sidepanelContent} setContent={setSidepanelContent} />
    </>
  );
};

export default PostsPage;
