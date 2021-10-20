import React, { ReactElement } from "react";
import "./header.css";
import HeaderImg from "../../assets/header-img.png";
interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-sm">React & Blog</span>
        <span className="header-title-lg">Blog</span>
      </div>
      <img
        src={
          "https://newjerseycog.org/wp-content/uploads/2014/08/Blog-Web-Header-Background.jpg"
        }
        alt="blog"
        className="header-img"
      />
    </div>
  );
}
