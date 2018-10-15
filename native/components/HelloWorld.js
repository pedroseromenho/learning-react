import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Pute</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    color: "red"
  }
});

export default HelloWorld;
