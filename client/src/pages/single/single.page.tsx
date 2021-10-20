import React, { ReactElement } from "react";
import PostDetails from "../../components/post_details/postDetails.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import "./single.css";
interface Props {}

export default function Single({}: Props): ReactElement {
  return (
    <div className="single">
      <PostDetails />
      <Sidebar />
    </div>
  );
}
