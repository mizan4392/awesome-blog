import React, { ReactElement } from "react";
import "../login/login.css";
interface Props {}

export default function Signup({}: Props): ReactElement {
  return (
    <div className="form_wrapper">
      <div className="title_container">
        <h2>Signup</h2>
      </div>

      <div className="form_container">
        <div className="row clearfix">
          <div className="">
            <form>
              <div className="input_field">
                <span>
                  <i aria-hidden="true" className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  name="userName"
                  placeholder="UserName"
                  required
                />
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa fa-envelope"></i>
                </span>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="input_field">
                <span>
                  <i aria-hidden="true" className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Re-type Password"
                  required
                />
              </div>
              <input className="button" type="submit" value="Register" />
              <input className="ext-btn" type="button" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
