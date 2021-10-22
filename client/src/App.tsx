import React from "react";
import "./App.css";
import CreatePost from "./components/create_post/createPost.component";
import TopBar from "./components/topBar/topBar";
import Login from "./pages/authentication/login/login.page";
import Signup from "./pages/authentication/signup/signup.page";
import Profile from "./pages/profile/profile.page";
import Single from "./pages/single/single.page";

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <CreatePost /> */}
      {/* <Profile /> */}
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
