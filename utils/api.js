import { AsyncStorage } from "react-native";
const DECKS_STORAGE_KEY = "FlashCards:decks";

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    return JSON.parse(result);
  });
}

export const getDeck = deckId => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
    const decks = JSON.parse(result);

    return decks[deckId];
  });
};
export function saveDeckTitle({ title }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}
export function addCardToDeck({ title, card }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}
/*
getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
*/
