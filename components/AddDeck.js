import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { getFlashcardData } from "../utils/helpers";
import TextButton from "./TextButton";

function SubmitBtn({ onPress }) {
  return <TextButton onPress={onPress}>SUBMIT</TextButton>;
}
class AddDeck extends Component {
  state = {
    title: "",
    uuid: "",
    questions: []
  };
  handleTextChange = title => {
    this.setState(() => {
      title;
    });
  };
  submit = () => {
    const key = 24;
    const entry = this.state;

    // Update Redux

    this.setState(() => ({ title: "", uuid: "", questions: [] }));

    // Navigate to home

    // Save to "DB"

    // Clear local notification
  };
  render() {
    const { title, uuid, questions } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={this.handleTextChange}
        />
        <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    backgroundColor: "#ecf0f1"
  },
  input: {
    width: 200,
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 50
  }
});
export default AddDeck;
