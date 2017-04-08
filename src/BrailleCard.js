import React, { Component } from 'react';
import { View } from 'react-native';
import CryptoCard from './CryptoCard';

const CIRCLE_SIZE = 11;

const Alphabet = {
  A: '100000',
  B: '101000',
  C: '110000',
  D: '110100',
  E: '100100',
  F: '111000',
  G: '111100',
  H: '101100',
  I: '011000',
  J: '011100',
  K: '100010',
  L: '101010',
  M: '110010',
  N: '110110',
  O: '100110',
  P: '111010',
  Q: '111110',
  R: '101110',
  S: '011010',
  T: '011110',
  U: '100011',
  V: '101011',
  W: '011101',
  X: '110011',
  Y: '110111',
  Z: '100111',
  '#': '010111',
  '1': '100000',
  '2': '101000',
  '3': '110000',
  '4': '110100',
  '5': '100100',
  '6': '111000',
  '7': '111100',
  '8': '101100',
  '9': '011000',
  '0': '011100',
};

const BrailleDot = ({filled}) => (
  <View
    style={{
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      margin: 3,
      borderRadius: CIRCLE_SIZE / 2,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: filled ? 'black' : 'white'
    }}
  />
);

const styles = {
  contents: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
};

class BrailleCard extends Component {
  render() {
    const { character } = this.props;
    if (!Alphabet[character]) {
      return (
        <CryptoCard
          character={character}
          width={55}
          height={55}
        />
      );
    }

    const dots = (Alphabet[character]).split('').map(x => x === '1');
    return (
      <CryptoCard
        character={character}
        width={55}
        height={55}
      >
        <View style={styles.contents}>
          <View style={styles.column}>
            <BrailleDot filled={dots[0]}/>
            <BrailleDot filled={dots[2]}/>
            <BrailleDot filled={dots[4]}/>
          </View>
          <View style={styles.column}>
            <BrailleDot filled={dots[1]}/>
            <BrailleDot filled={dots[3]}/>
            <BrailleDot filled={dots[5]}/>
          </View>
        </View>
      </CryptoCard>
    );
  }
}

export default BrailleCard;
