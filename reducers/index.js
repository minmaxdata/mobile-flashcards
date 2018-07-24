import { DECKS_RETRIEVE, DECK_ADD, CARD_ADD } from "../actions";

const initialState = {
  decks: {}
};

function decks(state = initialState, action) {
  switch (action.type) {
    case DECKS_RETRIEVE:
      return {
        ...state,
        decks: action.decks
      };
    case DECK_ADD:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.title.toLowerCase()]: {
            title: action.title,
            questions: []
          }
        }
      };
    case CARD_ADD:
      const { id, card } = action;
      return {
        ...state,
        decks: {
          ...state.decks,
          [id]: {
            ...state.decks[id],
            questions: [...state.decks[id].questions, card]
          }
        }
      };
    default:
      return state;
  }
}
export default decks;
