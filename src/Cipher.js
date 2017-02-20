import React from 'react';
import { connect } from 'react-redux';
import { CipherType, cipherTypeFromIndex } from './redux/cipher';
import BrailleCipher from './BrailleCipher';
import MorseCipher from './MorseCipher';

const Cipher = ({cipherIndex}) => {
  const type = cipherTypeFromIndex(cipherIndex);
  switch (type) {
    case CipherType.Braille:
      return <BrailleCipher/>
    case CipherType.Morse:
      return <MorseCipher/>
    default:
      throw new Error('Unknown cipher type');
  }
};

export default connect(state => ({
  cipherIndex: state.cipher
}))(Cipher);
