import React, { Component } from "react";
import { View, Text } from "react-native";
import { getFlashcardData } from "../utils/helpers";

export default class AddDeck extends Component {
  render() {
    return <View>{getFlashcardData("JavaScript").title}</View>;
  }
}
