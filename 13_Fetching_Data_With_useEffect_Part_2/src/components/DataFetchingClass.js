import React, { Component } from "react";

export default class DataFetchingClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      onePost: {},
      postId: 1,
    };
  }

  handleOnePostId = (event) => {
    this.setState({ postId: event.target.value });
  };

  fetchOnePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ onePost: data }))
      .catch((error) => {
        console.log(error.message);
      });
  };

  fetchPosts = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => this.setState(() => ({ posts: data })))
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {}
  };

  componentDidMount() {
    this.fetchPosts();
    this.fetchOnePost();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.postId !== this.state.postId) {
      this.fetchOnePost();
    }
  }

  render() {
    return (
      <div>
        <h2>Multiples posts</h2>
        {this.state.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        <hr />
        <h2>Single post</h2>
        <input
          type="text"
          value={this.state.postId}
          placeholder="Enter a integer"
          onChange={this.handleOnePostId}
        />
        <p>{this.state.onePost.title}</p>
      </div>
    );
  }
}
