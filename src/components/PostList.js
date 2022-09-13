import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errMsg: "Error retrieving data..." });
      });
  }

  render() {
    const { posts, errMsg } = this.state;
    return (
      <div>
        <h1>Post List</h1>
        {posts.length ? (
          posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
        ) : (
          <h3>{errMsg}</h3>
        )}
      </div>
    );
  }
}

export default PostList;
