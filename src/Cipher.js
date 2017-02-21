import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { View, Text } from 'react-native';
import { CipherType, setCipher } from './redux/cipher';
import BrailleCipher from './BrailleCipher';
import MorseCipher from './MorseCipher';
import A1Z26Cipher from './A1Z26Cipher';
import Plaintext from './Plaintext';
import CipherSelector from './CipherSelector';

const typeToComponent = {
  [CipherType.Braille]: BrailleCipher,
  [CipherType.Morse]: MorseCipher,
  [CipherType.A1Z26]: A1Z26Cipher,
};

const styles = {
  view: {
    backgroundColor: 'lightblue'
  }
};

const Cipher = ({setCipher}) => (
  <Swiper
    index={0}
    showsHorizontalScrollIndicator={true}
    onMomentumScrollEnd={(e, state) => {
      setCipher(state.index);
    }}
  >
    {Object.keys(typeToComponent).map((type, index) => {
      const Component = typeToComponent[type];
      return (
        <View
          key={index}
        >
          <CipherSelector cipher={type}/>
          <Component/>
          <Plaintext/>
        </View>
      );
    })}
  </Swiper>
);

export default connect(state => ({
}), { setCipher })(Cipher);
