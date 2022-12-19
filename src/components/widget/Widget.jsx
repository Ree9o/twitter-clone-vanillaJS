import { Search } from "@mui/icons-material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import React from "react";
import "../widget/Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__input">
        <Search className="widget__searchIcon" />
        <input type="text" placeholder="キーワード検索" />
      </div>
      <div className="widget__widgetContainer">
        <h2>今どうしてる？</h2>

        <TwitterTweetEmbed tweetId={"1602877799584632833"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Riku35film"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/Riku35film"}
          options={{ text: "#reactjs is awesome", via: "Riku35film" }}
        />
      </div>
    </div>
  );
}

export default Widget;
