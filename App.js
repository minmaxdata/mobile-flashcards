import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { StyleSheet, View } from "react-native";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { AppLoading } from "expo";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from "./reducers";
import AddDeck from "./components/AddDeck";

const persistConfig = {
  key: "flashcards",
  storage
};
const middlewares = [];
middlewares.push(createLogger());
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default class App extends React.Component {
  state = {
    isReady: false
  };
  render() {
    const persistor = persistStore(store, {}, () => {
      this.setState({ isReady: true });
    });
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <AddDeck />
          </View>
        </PersistGate>
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
