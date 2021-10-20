import React, { ReactElement } from "react";
import Sidebar from "../../components/sidebar/sidebar.component";
import "./profile.css";
interface Props {}

export default function Profile({}: Props): ReactElement {
  return (
    <div className="me">
      <div className="profile-wrapper">
        <div className="me-title">
          <span className="update-title">Update your Account</span>
          <span className="delete-title">Delete Account</span>
        </div>
        <form action="" className="me-form">
          <label>Profile Picture</label>
          <div className="me-img">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="me-img"
            />
            <label htmlFor="file-input">
              <i className="file-input-icon far fa-user circle"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="userName:" />
          <label>Email</label>
          <input type="email" placeholder="email:" />
          <label>Password</label>
          <input type="password" />
          <button className="me-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
