import React from "react";
import { connect } from "react-redux";

import "./App.css";

function App() {
  return <div>{this.props.data.test}</div>;
}

// redux providing state takeover
const mapStateToProps = state => {
  console.log("App State ->", state);
  return {
    data: state.data
  };
};
export default connect(mapStateToProps, {})(App);
