import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const persistConfig = {
  key: "flashcards",
  storage
};
const middlewares = [];
middlewares.push(createLogger());
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);
