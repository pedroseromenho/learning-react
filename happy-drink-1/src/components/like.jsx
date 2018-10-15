import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      countLikes: 0,
      disLiked: false,
      countDislikes: 0
    };
    this.handleClickLike = this.handleClickLike.bind(this);
  }
  handleClickLike() {
    this.setState({
      liked: !this.state.liked
    });
  }
  render() {
    return (
      <div>
        <Button
          onClick={this.handleClickLike}
          variant="contained"
          color="primary"
        >
          Like
        </Button>
      </div>
    );
  }
}

export default LikeDislike;
