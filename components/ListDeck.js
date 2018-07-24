import React, { Component } from "react";
import { View, Text } from "react-native";
import { getFlashcardData } from "../utils/helpers";

class ListDeck extends Component {
  state = {
    question: "",
    answer: ""
  };
  render() {
    return (
      <View>
        <Text>{getFlashcardData("JavaScript").title}</Text>
      </View>
    );
  }
}
export default ListDeck;
