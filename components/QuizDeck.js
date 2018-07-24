import React, { Component } from "react";
import { View, Text } from "react-native";
import { getFlashcardData } from "../utils/helpers";

class QuizDeck extends Component {
  state = {
    question: "",
    answer: "",
    uuid: ""
  };
  render() {
    return (
      <View>
        <Text>{getFlashcardData("JavaScript").title}</Text>
      </View>
    );
  }
}
export default QuizDeck;
