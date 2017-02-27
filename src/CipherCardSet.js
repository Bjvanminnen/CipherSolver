import React, { Component } from 'react';
import { View } from 'react-native';

const styles = {
  row: {
    flexDirection: 'row'
  }
};

const defaultCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const CipherCardSet = ({ characters=defaultCharacters, cardsPerRow, CardComponent }) => {

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
