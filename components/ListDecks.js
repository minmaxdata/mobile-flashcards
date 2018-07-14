import React, { Component } from "react";
import { View, Text } from "react-native";
import { getFlashcardData } from "../utils/helpers";

export default class ListDecks extends Component {
  state = {
    decks: ""
  };
  render() {
    const decks = getFlashcardData();
    console.log("decks ", decks);

    return (
      <View>
        {Object.keys(decks).map(key => {
          const { title, uuid, questions } = decks[key];
          const value = this.state[key];

          return (
            <View key={uuid}>
              <Text>{title}</Text>
              <Text>{questions.length}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
