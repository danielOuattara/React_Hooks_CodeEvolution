import { useEffect, useState } from "react";
// import axios from 'axios'

export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [onePost, setOnePost] = useState({});
  const [postId, setPostId] = useState(1);

  const handleOnePostId = (event) => {
    setPostId(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
      method: "GET",
      params: { _limit: 10 },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setOnePost(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, [postId]);

  return (
    <div>
      <h2>Multiples posts</h2>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      <hr />
      <h2>Single post</h2>
      <input
        type="text"
        value={postId}
        placeholder="Enter a integer"
        onChange={handleOnePostId}
      />
      <p>{onePost.title}</p>
    </div>
  );
}
