import React, { ReactElement } from "react";
import "./createPost.css";
interface Props {}

export default function CreatePost({}: Props): ReactElement {
  return (
    <div className="create-post">
      <img
        src="https://image.shutterstock.com/image-vector/simple-black-childish-hand-drawing-260nw-1703704024.jpg"
        className="uploaded-img"
        alt="a"
      />
      <form action="" className="form">
        <div className="form-group">
          <label htmlFor="file-input">
            <i className="create-icon fas fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="input"
            autoFocus={true}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="textarea"
            className="input textarea"
          ></textarea>
        </div>
        <button className="btn">Publish</button>
      </form>
    </div>
  );
}
