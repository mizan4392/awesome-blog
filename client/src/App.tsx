import React from "react";
import "./App.css";
import CreatePost from "./components/create_post/createPost.component";
import TopBar from "./components/topBar/topBar";
import Login from "./pages/authentication/login/login.page";
import Signup from "./pages/authentication/signup/signup.page";
import Profile from "./pages/profile/profile.page";
import Single from "./pages/single/single.page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/home.page";

function App() {
  const user = false;
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/write">
            <CreatePost />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
