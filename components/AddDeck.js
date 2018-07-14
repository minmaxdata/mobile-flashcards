import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import uuid from "uuid";
import { getFlashcardData } from "../utils/helpers";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  );
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
