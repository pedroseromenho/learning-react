import React, { Component } from "react";
import { AppRegistry, View, Image } from "react-native";

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: "https://media.giphy.com/media/l3fQf1OEAq0iri9RC/giphy.gif"
          }}
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent("DisplayAnImage", () => DisplayAnImage);
