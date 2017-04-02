import React from 'react';
import { ScrollView, View, TouchableHighlight, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { selectCharacter } from './redux/plaintext';

const LETTER_HEIGHT = 40;

const styles = {
  plaintext: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  touchable: {
    margin: 2,
    padding: 2,
    backgroundColor: 'white',
    borderWidth: 1,
    height: LETTER_HEIGHT + 2 * (2 + 1), // account for padding and border
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontSize: LETTER_HEIGHT
  },
  selected: {
    borderStyle: 'dashed',
    borderColor: 'black'
  }
};

// TODO : should be scrollable (scrollview renders weird right now)
const Plaintext = ({selectedIndex, characters, selectCharacter}) => (
  <ScrollView>
    <View style={styles.plaintext}>
    {
      characters.map((char, index) => (
        <TouchableHighlight
          key={index}
          style={[
            styles.touchable,
            index === selectedIndex && styles.selected
          ]}
          onPress={() => selectCharacter(index, char)}
        >
          <Text
            style={styles.text}
          >
            {char}
          </Text>
        </TouchableHighlight>
      ))
    }
    </View>
  </ScrollView>
);

export default connect(state => ({
  selectedIndex: state.plaintext.selectedIndex,
  characters: state.plaintext.letters
}), { selectCharacter })(Plaintext);
