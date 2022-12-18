import { Avatar, Button } from "@mui/material";
import React from "react";
import "../timeline/Tweetbox.css";

function Tweetbox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input type="text" placeholder="今どうしてる？"></input>
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="画像のURLを入力してください"
        ></input>
        <Button className="tweetBox__tweetBtn" type="submit">
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
