import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Platform } from 'react-native'
import { Provider } from 'react-redux';
import getStore from './redux';
import Cipher from './Cipher';
import { Font } from 'expo';

// TODO - allow adding spaces/line breaks
// TODO - ability to clear current text

// TODO - android issues
// A1Z26 two digits numbers look bad
// Braille screen too long

// Styles
const { width, height } = Dimensions.get('window');
console.log(width, height);
const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    // defaults are from my iphone 7 plus
    // TODO - handle different resolutions, and also rotations
    width: Platform.OS === 'web' ? 414 : width,
    height: Platform.OS === 'web' ? 736 : height,
    backgroundColor: '#eeeeee'
  }
});

// Components
class App extends Component {
  state = {
    fontLoaded: false
  };

  componentDidMount() {
    Font.loadAsync({
      'overpass-mono': require('../assets/fonts/OverpassMono-Regular.ttf'),
    }).then(() => {
      this.setState({fontLoaded: true});
    });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }
    return (
      <Provider store={getStore()}>
        <View style={styles.main}>
          <Cipher/>
        </View>
      </Provider>
    );
  }
}

export default App;
