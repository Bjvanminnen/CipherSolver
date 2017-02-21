import React from 'react';
import { View } from 'react-native';
import A1Z26Card from './A1Z26Card';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// TODO - could be dependent on dimensions (or just figure out flex)
const CARDS_PER_ROW = 6;

const styles = {
  row: {
    flexDirection: 'row'
  }
};

const A1Z26Cipher = () => {
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
            <A1Z26Card
              key={charKey}
              character={char}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default A1Z26Cipher;
