import React from "react";
import { Text, View } from "react-native";
import AddDeck from "./components/AddDeck";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AddDeck />
      </View>
    );
  }
}
