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

// TODO: Clicking name should give us a dropdown.
const CipherSelector = ({cipher, incrementCipher, decrementCipher}) => (
  <View style={styles.main}>
    <TouchableHighlight
      onPress={decrementCipher}
    >
      <Text
        style={styles.button}
      >
        {"<"}
      </Text>
    </TouchableHighlight>
    <Text style={styles.label}>
      {cipher}
    </Text>
    <TouchableHighlight
      onPress={incrementCipher}
    >
      <Text
        style={styles.button}
      >
        {">"}
      </Text>
    </TouchableHighlight>
  </View>
);

export default connect(state => ({
  cipher: cipherTypeFromIndex(state.cipher)
}), { incrementCipher, decrementCipher })(CipherSelector);
