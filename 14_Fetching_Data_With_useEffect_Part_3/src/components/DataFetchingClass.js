import React, { Component } from "react";

export default class DataFetchingClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      onePost: {},
      typeId: null,
      postId: 0,
    };
  }

  handleOnePostId = (event) => {
    this.setState({ typeId: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ postId: this.state.typeId });
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

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Enter an integer : </label>
          <input
            type="text"
            value={this.state.typedId}
            placeholder="Enter a integer"
            onChange={this.handleOnePostId}
          />
          <input type="submit" value="Send Request" />
        </form>

        <p>{this.state.onePost.title}</p>
      </div>
    );
  }
}
