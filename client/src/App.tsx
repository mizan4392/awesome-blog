import React from "react";
import "./App.css";
import CreatePost from "./components/create_post/createPost.component";
import TopBar from "./components/topBar/topBar";
import Single from "./pages/single/single.page";

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      {/* <Single /> */}
      <CreatePost />
    </div>
  );
}

export default App;
