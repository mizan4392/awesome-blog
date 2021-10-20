import React from "react";
import "./App.css";
import CreatePost from "./components/create_post/createPost.component";
import TopBar from "./components/topBar/topBar";
import Profile from "./pages/profile/profile.page";
import Single from "./pages/single/single.page";

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <CreatePost /> */}
      <Profile />
    </div>
  );
}

export default App;
