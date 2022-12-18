import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "../timeline/Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__avater">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>テスト</h3>
            <span className="post__headerSpecial">
              <VerifiedUser className="post__badge" />
              @test_id
            </span>
          </div>
          <div className="post-headerDescription">
            <p>reactなうw</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
