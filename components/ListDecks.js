import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, AsyncStorage } from "react-native";
import { getFlashcardData } from "../utils/helpers";

function Deck({ title, uuid, questions }) {
  return (
    <View key={uuid}>
      <Text>{title}</Text>
    </View>
  );
}
export default class ListDecks extends Component {
  state = {
    decks: ""
  };
  renderItem = ({ item }) => {
    return <Deck {...item} />;
  };
  render() {
    const list = getFlashcardData();
    console.log(list);

    return (
      <View style={styles.container}>
        <FlatList data={list} renderItem={this.renderItem} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 40
  }
});
