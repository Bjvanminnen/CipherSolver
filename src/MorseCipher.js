import React from 'react';
import { View } from 'react-native';
import MorseCard from './MorseCard';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
// TODO - could be dependent on dimensions (or just figure out flex)
const CARDS_PER_ROW = 4;

const styles = {
  row: {
    flexDirection: 'row'
  }
};

const MorseCipher = () => {
  // TODO - share some of this logic?
  let ungrouped = characters.split('');
  const grouped = [];
  while (ungrouped.length) {
    grouped.push(ungrouped.splice(0, CARDS_PER_ROW));
  }
  return (
    <View>
      {grouped.map((group, groupKey) => (
        <View
          key={groupKey}
          style={styles.row}
        >
          {group.map((char, charKey) => (
            <MorseCard
              key={charKey}
              character={char}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default MorseCipher;
