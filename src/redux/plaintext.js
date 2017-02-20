import { List } from 'immutable';

const SET_CHARACTER = 'plaintext/SET_CHARACTER';
export const setCharacter = character => ({type: SET_CHARACTER, character});

const CLEAR_STRING = 'plaintext/CLEAR_STRING';
export const clearString = () => ({ type: CLEAR_STRING });

export const SELECT_CHARACTER = 'plaintext/SELECT_CHARACTER';
export const selectCharacter = (index, char) => ({ type: SELECT_CHARACTER, index, char });

const initialState = {
  letters: List(' '),
  selectedIndex: 0
};

export default function plaintext(state = initialState, action) {
  if (action.type === SET_CHARACTER) {
    const index = state.selectedIndex;
    let nextLetters = state.letters.set(index, action.character);
    if (index === state.letters.size - 1) {
      return {
        ...state,
        letters: nextLetters.push(' '),
        selectedIndex: index + 1
      };
    } else {
      return {
        ...state,
        letters: nextLetters
      };
    }
  }
  if (action.type === CLEAR_STRING) {
    return [];
  }

  if (action.type === SELECT_CHARACTER) {
    return {
      ...state,
      selectedIndex: action.index
    };
  }
  return state;
}

export const highlightedCharacter = state => state.letters.get(state.selectedIndex);
