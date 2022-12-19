import React from "react";
import "../timeline/Timeline.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";

function Timeline() {
  return (
    <div className="timeline">
      {/* header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* tweetbox */}
      <Tweetbox />

      {/* post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Timeline;
