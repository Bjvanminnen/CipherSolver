import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { View, Text } from 'react-native';
import { CipherType, setCipher } from './redux/cipher';
import CipherCardSet from './CipherCardSet';
import BrailleCard from './BrailleCard';
import MorseCard from './MorseCard';
import A1Z26Card from './A1Z26Card';
import Plaintext from './Plaintext';
import CipherSelector from './CipherSelector';

const typeToProps = {
  [CipherType.Braille]: {
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ#1234567890",
    CardComponent: BrailleCard
  },
  [CipherType.Morse]: {
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
    CardComponent: MorseCard
  },
  [CipherType.A1Z26]: {
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    CardComponent: A1Z26Card
  },
};

const Cipher = ({setCipher}) => (
  <Swiper
    index={0}
    showsHorizontalScrollIndicator={true}
    onMomentumScrollEnd={(e, state) => {
      setCipher(state.index);
    }}
  >
    {Object.keys(typeToProps).map((type, index) => (
      <View
        key={index}
      >
        <CipherSelector cipher={type}/>
        <CipherCardSet {...typeToProps[type]}/>
        <Plaintext/>
      </View>
    ))}
  </Swiper>
);

export default connect(state => ({
}), { setCipher })(Cipher);
