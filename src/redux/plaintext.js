import { List } from 'immutable';

const SET_CHARACTER = 'plaintext/SET_CHARACTER';
export const setCharacter = character => ({type: SET_CHARACTER, character});

const CLEAR_STRING = 'plaintext/CLEAR_STRING';
export const clearString = () => ({ type: CLEAR_STRING });

const SELECT_CHARACTER = 'plaintext/SELECT_CHARACTER';
export const selectCharacter = (index, char) => ({ type: SELECT_CHARACTER, index, char });

const DELETE_CHARACTER = 'plaintext/DELETE_CHARACTER';
export const deleteCharacter = () => ({ type: DELETE_CHARACTER });

const DELETE_STRING = 'plaintext/DELETE_STRING';
export const deleteString = () => ({ type: DELETE_STRING });

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

  if (action.type === DELETE_CHARACTER) {
    if (state.letters.size <= 1) {
      return state;
    }

    let deleteAt = state.selectedIndex;
    if (deleteAt === state.letters.size - 1) {
      // if we at last character, delete previous one
      deleteAt -= 1;
    }
    return {
      ...state,
      letters: state.letters.delete(deleteAt),
      selectedIndex: state.letters.size - 2
    };
  }

  if (action.type === DELETE_STRING) {
    return initialState;
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
