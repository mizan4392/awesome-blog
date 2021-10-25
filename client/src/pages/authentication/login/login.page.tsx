import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import "./login.css";
interface Props {}

export default function Login({}: Props): ReactElement {
  const history = useHistory();
  return (
    <div className="form_wrapper">
      <div className="title_container">
        <h2>Login</h2>
      </div>

      <div className="form_container">
        <div className="row clearfix">
          <div className="">
            <form>
              <div className="input_field">
                <span>
                  <i aria-hidden="true" className="fa fa-envelope"></i>
                </span>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input_field">
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
              <input className="button" type="submit" value="Login" />
              <input
                className="ext-btn"
                type="button"
                value="Register"
                onClick={() => {
                  history.push("/register");
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
