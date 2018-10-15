import React, { Component } from "react";

class SingleEtab extends Component {
  render() {
    return <div>{this.props.etabValue.name}</div>;
  }
}

export default SingleEtab;
