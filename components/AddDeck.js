import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import uuid from "uuid";
import { getFlashcardData } from "../utils/helpers";
import TextButton from "./TextButton";

function SubmitBtn({ onPress }) {
  return <TextButton onPress={onPress}>SUBMIT</TextButton>;
}
export default class AddDeck extends Component {
  state = {
    title: "",
    uuid: "",
    questions: []
  };
  submit = () => {
    const key = uuid();
    const entry = this.state;

    // Update Redux

    this.setState(() => ({ title: "", uuid: "", questions: [] }));

    // Navigate to home

    // Save to "DB"

    // Clear local notification
  };
  render() {
    return (
      <View>
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}
