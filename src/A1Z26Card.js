import React from 'react';
import { View, Text } from 'react-native';
import CryptoCard from './CryptoCard';

const Alphabet = {
  A: '1',
  B: '2',
  C: '3',
  D: '4',
  E: '5',
  F: '6',
  G: '7',
  H: '8',
  I: '9',
  J: '10',
  K: '11',
  L: '12',
  M: '13',
  N: '14',
  O: '15',
  P: '16',
  Q: '17',
  R: '18',
  S: '19',
  T: '20',
  U: '21',
  V: '22',
  W: '23',
  X: '24',
  Y: '25',
  Z: '26'
};

const styles = {
  contents: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 5
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30
  }
};

const textForChar = character => Alphabet[character];

const A1Z26Card = ({character}) => (
  <CryptoCard
    width={55}
    height={30}
    character={character}
  >
    <View style={styles.contents}>
      <View style={styles.column}>
        <Text style={styles.text}>
          {textForChar(character)}
        </Text>
      </View>
    </View>
  </CryptoCard>
);

export default A1Z26Card;
