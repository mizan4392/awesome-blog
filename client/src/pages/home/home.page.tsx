import React, { ReactElement } from "react";
import Header from "../../components/header/header.component";

import PostWarper from "../../components/post_warper/postWarper.component";
import Sidebar from "../../components/sidebar/sidebar.component";

import "./home.css";
interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <PostWarper />
        <Sidebar />
      </div>
    </React.Fragment>
  );
}
