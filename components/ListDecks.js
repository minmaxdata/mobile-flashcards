import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
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
          return (
            <View key={key.uuid}>
              <FlatList
                key={key}
                data={[key]}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item}</Text>
                  </View>
                )}
              />
            </View>
          );
        })}
      </View>
    );
  }
}
