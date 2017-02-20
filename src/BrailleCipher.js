import React from 'react';
import { View } from 'react-native';
import BrailleCard from './BrailleCard';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#1234567890";
// TODO - could be dependent on dimensions (or just figure out flex)
const CARDS_PER_ROW = 7;

const styles = {
  row: {
    flexDirection: 'row'
  }
};

const BrailleCipher = () => {
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
              <BrailleCard
                key={charKey}
                character={char}
              />
          ))}
        </View>
      ))}
    </View>
  );
}

export default BrailleCipher;
