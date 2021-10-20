import React, { ReactElement } from "react";
import "./sidebar.css";
import SidebarImg from "../../assets/sidebar-img.jpg";
interface Props {}

export default function Sidebar({}: Props): ReactElement {
  return (
    <div className="sideBar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img src={SidebarImg} alt="" className="sidebar-img" />
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-lists">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
