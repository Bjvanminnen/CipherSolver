export const CipherType = {
  Braille: 'Braille',
  Morse: 'Morse'
};

const ciphers = Object.keys(CipherType);

const SET_CIPHER = 'cipher/SET_CIPHER';
export const setCipher = cipherIndex => ({ type: SET_CIPHER, cipherIndex });

const INCREMENT_CIPHER = 'cipher/INCREMENT_CIPHER';
export const incrementCipher = () => ({ type: INCREMENT_CIPHER });

const DECREMENT_CIPHER = 'cipher/DECREMENT_CIPHER';
export const decrementCipher = () => ({ type: DECREMENT_CIPHER });

export default function cipher(state = 0, action) {
  if (action.type === SET_CIPHER) {
    const cipherIndex = action.cipherIndex;
    if (cipherIndex >= ciphers.length) {
      throw new Error('Invalid cipherIndex');
    }
    return cipherIndex;
  }

  if (action.type === INCREMENT_CIPHER) {
    return (state + 1) % ciphers.length;
  }

  if (action.type === DECREMENT_CIPHER) {
    return (state - 1 + ciphers.length) % ciphers.length;
  }
  return state;
}

export const cipherTypeFromIndex = index => CipherType[ciphers[index]];
