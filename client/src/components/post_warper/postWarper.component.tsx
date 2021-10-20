import React from "react";
import Post from "../post/post.component";
import "./postWarper.css";

export default function PostWarper() {
  return (
    <div className="post-warper">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
