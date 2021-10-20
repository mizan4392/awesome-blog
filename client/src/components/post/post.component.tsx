import React, { ReactElement } from "react";
import "./post.css";
interface Props {}

export default function Post({}: Props): ReactElement {
  return (
    <div className="post">
      <img
        src="https://image.shutterstock.com/image-vector/simple-black-childish-hand-drawing-260nw-1703704024.jpg"
        alt="post"
        className="post-img"
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">What is Lorem Ipsum?</span>
        <hr />
        <span className="post-date">1h ago</span>
      </div>
      <p className="post-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    </div>
  );
}
