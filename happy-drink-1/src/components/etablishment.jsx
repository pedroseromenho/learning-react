import React, { Component } from "react";

class Establishment extends Component {
  render() {
    return (
      <div className="establishment">
        <h3>{this.props.establishment.name}</h3>
        {this.props.establishment.description}
        <LikeDislike />
      </div>
    );
  }
}
