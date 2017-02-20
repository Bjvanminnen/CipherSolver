import React from 'react'
import { StyleSheet, View, Dimensions, Platform } from 'react-native'
import { Provider } from 'react-redux';
import getStore from './redux';
import Cipher from './Cipher';
import Plaintext from './Plaintext';
import CipherSelector from './CipherSelector';

// TODO - own repo with better name
// TODO - allow adding spaces/line breaks
// TODO - ability to clear current text

// Styles
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    // defaults are from my iphone 7 plus
    width: Platform.OS === 'web' ? 414 : width,
    height: Platform.OS === 'web' ? 736 : height,
    backgroundColor: '#eeeeee'
  }
});

// Components
const App = () => (
  <Provider store={getStore()}>
    <View style={styles.main}>
      <CipherSelector/>
      <Cipher/>
      <Plaintext/>
    </View>
  </Provider>
)

export default App;
