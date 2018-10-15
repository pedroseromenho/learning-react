import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={styles.homeBackground}>
        <div className="container" style={styles.margins}>
          <h1 style={styles.whiteTitle}>
            Hi, I'm Photon, another fine little freebie from HTML5 UP.
          </h1>
          <p style={styles.whiteText}>
            Accumsan feugiat mi commodo erat lorem ipsum, sed magna lobortis
            feugiat sapien sed etiam volutpat accumsan.
          </p>
          <button style={styles.buttonStyle}>Discover</button>
        </div>
      </div>
    );
  }
}

const styles = {
  homeBackground: {
    backgroundImage: "linear-gradient(45deg, #4fa49a, #4361c2)",
    height: 800,
    top: 0
  },
  whiteTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "3em",
    textAlign: "center"
  },
  whiteText: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  margins: {
    padding: "200px 230px"
  },
  buttonStyle: {
    display: "block",
    margin: "0 auto",
    backgroundColor: "transparent",
    color: "white",
    fontSize: 20,
    border: "2px solid",
    borderRadius: 23,
    padding: 10
  }
};

export default Home;
