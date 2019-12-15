import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  getDataRequest,
  getPostsRequest,
  createPostRequest
} from "./redux/actions/data";

import "./App.css";

function App(props) {
  useEffect(() => {
    props.getDataRequest();
    props.getPostsRequest();
  }, []);
  return (
    <div>
      <h1>
        {props.data}
        {props.posts &&
          props.posts.map((e, i) => {
            return <div key={i}>{e.msg}</div>;
          })}
      </h1>

      <button
        onClick={() => props.createPostRequest({ post: "Random Num Post - " })}
      >
        CLick to Add POst
      </button>
    </div>
  );
}

// redux providing state takeover
const mapStateToProps = state => {
  console.log("App State ->", state);
  return {
    data: state.data.test,
    posts: state.data.posts
  };
};
export default connect(mapStateToProps, {
  getDataRequest,
  getPostsRequest,
  createPostRequest
})(App);
