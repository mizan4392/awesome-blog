import React, { ReactElement } from "react";
import Header from "../../components/header/header.component";
import Post from "../../components/post/post.component";
import Sidebar from "../../components/sidebar/sidebar.component";

import "./home.css";
interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </React.Fragment>
  );
}
