import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { decksRetrieve } from "../actions";
import { getDecks } from "../utils/api";
import { AppLoading } from "expo";

function Deck({ title, questions }) {
  return (
    <View key={title}>
      <Text>{title}</Text>
    </View>
  );
}
class ListDecks extends Component {
  state = {
    ready: false
  };
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()
      .then(decks => dispatch(decksRetrieve(decks)))
      .then(() => this.setState(() => ({ ready: true })));
  }
  renderItem = ({ item }) => {
    return <Deck {...item} />;
  };
  render() {
    const { decks } = this.props;
    const { ready } = this.state;
    console.log(Object.values(decks));
    if (ready === false) {
      return <AppLoading />;
    }
    if (decks.length === undefined) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>No Flashcards are Available</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={this.renderItem}
          keyExtractor={item => item.title}
        />
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
function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(ListDecks);
