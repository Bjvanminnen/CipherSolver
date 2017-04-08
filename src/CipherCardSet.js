import React, { Component } from 'react';
import { View } from 'react-native';
import CryptoCard from './CryptoCard';

const styles = {
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // TODO - would like to center this, but I don't want the last row centered
    // will need to figure out how to accomplish that
    // justifyContent: 'center'
  },
};

const CipherCardSet = ({ characters, CardComponent }) => (
  <View style={styles.main}>
    {characters.split('').map((char, index) => (
      <CardComponent
        key={index}
        character={char}
      />
    ))}
    <CardComponent
      key="space"
      character="_"
    />
    <CardComponent
      key="delete"
      character="<"
    />
  </View>
);

export default CipherCardSet;
