import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Boutton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: null
  //   };
  // }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPressButton}
      >
        <Text style={styles.p}>{this.props.bouttonName}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    borderRadius: 1000,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30
  },
  p: {
    color: "white",
    fontSize: 40
  }
});

export default Boutton;
