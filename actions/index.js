export const DECKS_RETRIEVE = " DECKS_RETRIEVE";
export const DECK_ADD = "DECK_ADD";
export const CARD_ADD = "CARD_ADD";

export function decksRetrieve(decks) {
  return {
    type: DECKS_RETRIEVE,
    decks
  };
}

export function deckAdd(title) {
  return {
    type: DECK_ADD,
    title
  };
}
export function cardAdd(id, card) {
  return {
    type: CARD_ADD,
    id,
    card
  };
}
