import React from "react";
import requireAuth from "./requireAuth";

class Content extends React.Component {
  render() {
    return <div>You have been authenticated!</div>;
  }
}

export default requireAuth(Content);
