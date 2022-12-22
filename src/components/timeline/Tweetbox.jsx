import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import db from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../timeline/Tweetbox.css";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    /* firebase send */
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "プログラミング",
      userName: "Riku",
      verified: true,
      text: tweetMessage,
      avater: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timeStamp: serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            value={tweetMessage}
            type="text"
            placeholder="今どうしてる？"
            onChange={(e) => {
              setTweetMessage(e.target.value);
            }}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox__imageInput"
          type="text"
          placeholder="画像のURLを入力してください"
          onChange={(e) => {
            setTweetImage(e.target.value);
          }}
        ></input>
        <Button
          className="tweetBox__tweetBtn"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
