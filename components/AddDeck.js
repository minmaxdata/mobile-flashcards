import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { deckAdd } from "../actions";
import { connect } from "react-redux";
import { getDecks, saveDeckTitle } from "../utils/api";
import TextButton from "./TextButton";

function SubmitBtn({ onPress }) {
  return <TextButton onPress={onPress}>SUBMIT</TextButton>;
}
class AddDeck extends Component {
  state = {
    title: ""
  };
  submit = () => {
    const { title } = this.state;
    const id = title.toLowerCase();
    const deck = {
      [id]: { title: title, questions: [] }
    };
    this.props.deckAdd(deck);
    //this.props.navigation.navigate("Deck", { id });
    console.log("add decks", deck);
    saveDeckTitle(deck);

    // Navigate to home

    this.setState({ title: "" });

    // Clear local notification
  };
  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          placeholder="FlashCard Topic"
          style={styles.input}
          value={title}
          onChangeText={title => this.setState({ title })}
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
function mapDispatchToProps(dispatch) {
  return {
    deckAdd: title => dispatch(deckAdd(title))
  };
}
export default connect(
  null,
  mapDispatchToProps
)(AddDeck);
