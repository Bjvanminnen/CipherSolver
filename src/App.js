import React from 'react'
import { StyleSheet, View, Dimensions, Platform } from 'react-native'
import { Provider } from 'react-redux';
import getStore from './redux';
import Cipher from './Cipher';

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
    // backgroundColor: '#eeeeee'
  }
});

// Components
const App = () => (
  <Provider store={getStore()}>
    <View style={styles.main}>
      <Cipher/>
    </View>
  </Provider>
)

export default App;
