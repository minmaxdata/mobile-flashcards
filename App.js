import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ListDecks from "./components/ListDecks";
import AddDeck from "./components/AddDeck";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";
import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [];
middlewares.push(createLogger());
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <ListDecks />
          <AddDeck />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
