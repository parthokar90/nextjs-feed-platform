import React from "react";
import FeedLayout from "./(feed)/layout";
import CreatePost from "@/components/feed/CreatePost";
import PostList from "@/components/feed/PostList";

export default function Home() {
  return (
    <FeedLayout>
      {/* Create Post */}
      <CreatePost />

      {/* Post list */}
      <PostList />
    </FeedLayout>
  );
}