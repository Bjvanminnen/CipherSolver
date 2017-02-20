import React from 'react';
import { ScrollView, View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import { selectCharacter } from './redux/plaintext';

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
  },
  text: {
    fontFamily: 'Courier New',
    fontSize: 30
  },
  selected: {
    borderWidth: 1,
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
