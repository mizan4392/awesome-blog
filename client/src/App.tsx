import React from "react";
import "./App.css";
import TopBar from "./components/topBar/topBar";
import Single from "./pages/single/single.page";

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      <Single />
    </div>
  );
}

export default App;
