import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HelloWorld from "./components/HelloWorld";
import Boutton from "./components/Boutton";
import DisplayAnImage from "./components/DisplayAnImage";
import MyTextInput from "./components/MyTextInput";
import DisplayText from "./components/DisplayText";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onPressButton(text) {
    alert(text);
  }

  onChangeText(textFormInput) {
    this.setState({ text: textFormInput });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.text}>Votre liste personnelle</Text>
        </View>
        <View style={styles.containerInput}>
          <HelloWorld />
          <MyTextInput
            value={this.state.text}
            onChangeText={inComingText => this.onChangeText(inComingText)}
          />
        </View>
        <View style={styles.containerDisplay}>
          <DisplayText />
        </View>
        <View style={styles.containerButton}>
          <Boutton
            bouttonName={"(|)"}
            onPressButton={() => this.onPressButton(this.state.text)}
          />
        </View>
        {/* <DisplayAnImage /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  containerInput: {
    flex: 3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50
  },
  containerDisplay: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50
  },

  containerButton: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50
  },
  text: {
    color: "white",
    marginTop: 10
  }
});
export default App;
