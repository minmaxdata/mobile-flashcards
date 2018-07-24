import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { decksRetrieve } from "../actions";
import { getDecks } from "../utils/api";

function Deck({ title, questions }) {
  return (
    <View key={title}>
      <Text>{title}</Text>
    </View>
  );
}
class ListDecks extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const json = await getDecks();
    dispatch(decksRetrieve(JSON.parse(data)));
  }
  renderItem = ({ item }) => {
    return <Deck {...item} />;
  };
  render() {
    const decks = this.props.decks;
    console.log(decks);

    if (decks === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>No flashcards available</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList data={Object.values(decks)} renderItem={this.renderItem} />
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
export default connect(state => state)(ListDecks);
