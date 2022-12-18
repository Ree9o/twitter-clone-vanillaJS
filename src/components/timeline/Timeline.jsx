import React from "react";
import "../timeline/Timeline.css"
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
    </div>
  );
}

export default Timeline;
