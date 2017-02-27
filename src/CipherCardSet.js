import React, { Component } from 'react';
import { View } from 'react-native';

const styles = {
  row: {
    flexDirection: 'row'
  }
};

const CipherCardSet = ({ characters, cardsPerRow, CardComponent }) => {

  let ungrouped = characters.split('');
  const grouped = [];
  while (ungrouped.length) {
    grouped.push(ungrouped.splice(0, cardsPerRow));
  }
  return (
    <View>
      {grouped.map((group, groupKey) => (
        <View
          key={groupKey}
          style={styles.row}
        >
          {group.map((char, charKey) => (
            <CardComponent
              key={charKey}
              character={char}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default CipherCardSet;
