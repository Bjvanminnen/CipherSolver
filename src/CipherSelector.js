import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { cipherTypeFromIndex, incrementCipher, decrementCipher } from './redux/cipher';

const styles = {
  main: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
  label: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 30
  },
  button: {
    fontSize: 30
  }
};

const CipherSelector = ({cipher, incrementCipher, decrementCipher}) => (
  <View style={styles.main}>
    <Text style={styles.label}>
      {cipher}
    </Text>    
  </View>
);

export default connect(null, { incrementCipher, decrementCipher })(CipherSelector);
