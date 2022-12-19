import React, { useEffect, useState } from "react";
import "../timeline/Timeline.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((querySnapshot) =>
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    );
    console.log("relog");
  }, []);

  return (
    <div className="timeline">
      {/* header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* tweetbox */}
      <Tweetbox />

      {/* post */}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avater={post.avater}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Timeline;
