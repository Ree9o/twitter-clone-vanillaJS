import React, { useEffect, useState } from "react";
import "../timeline/Timeline.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import db from "../../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = collection(db, "posts");
    const newQuery = query(postData, orderBy("timeStamp", "desc"));
    // getDocs(newQuery).then((querySnapshot) =>
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()))
    // );

    onSnapshot(newQuery, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
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
      <FlipMove>
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
      </FlipMove>
    </div>
  );
}

export default Timeline;
