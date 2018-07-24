import { DECKS_RETRIEVE, DECK_ADD, CARD_ADD } from "../actions";

const initialState = {};

function decks(state = initialState, action) {
  console.log(" decks reducer ", state.decks, action);
  switch (action.type) {
    case DECKS_RETRIEVE:
      return { ...state, ...action.decks };
    case DECK_ADD:
      return { ...state, ...action.deck };
    case CARD_ADD:
      return {};
    default:
      return state;
  }
}
export default decks;
