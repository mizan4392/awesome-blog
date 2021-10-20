import React, { ReactElement } from "react";
import "./postDetails.css";
interface Props {}

export default function PostDetails({}: Props): ReactElement {
  return (
    <div className="post-details">
      <div className="post-details-wrapper">
        <img
          src="https://image.shutterstock.com/image-vector/simple-black-childish-hand-drawing-260nw-1703704024.jpg"
          alt="imh"
          className="post-img"
        />
        <h1 className="title">
          What is Lorem Ipsum?
          <div className="post-actions">
            <i className="single-post-icon far fa-edit"></i>
            <i className="single-post-icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="post-info">
          <span className="post-author">
            Author: <b>Mizan</b>
          </span>
          <span className="post-time">1h</span>
        </div>
        <p className="post-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi minima
          reprehenderit quod quam sed non cum, incidunt aperiam molestias eius,
          inventore officiis modi totam laudantium eaque, fugit cupiditate dicta
          quis.
        </p>
      </div>
    </div>
  );
}
