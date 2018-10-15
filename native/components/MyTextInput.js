import React, { Component } from "react";
import { AppRegistry, TextInput, StyleSheet } from "react-native";

class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }

  render() {
    return (
      <TextInput
        style={styles.textInput}
        onChangeText={this.props.onChangeText}
        // value={this.state.text}
        value={this.props.value}
        placeholder="Entrer des synonimes de pute"
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    backgroundColor: "white",
    height: 50,
    borderColor: "red",
    borderBottomWidth: 4,
    marginBottom: 30
  }
});

export default MyTextInput;
