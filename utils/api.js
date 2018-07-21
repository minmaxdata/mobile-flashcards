import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "MobileFlashCards:decks";

export function fetchDecksResults() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then();
}

export function submitDeck({ entry, key }) {
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
