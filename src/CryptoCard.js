import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { TouchableHighlight, View, Text, Platform } from 'react-native';
import { setCharacter, deleteCharacter, highlightedCharacter } from './redux/plaintext';

const styles = {
  main: {
    backgroundColor: 'lightgray',
    margin: 5,
  },
  focus: {
    backgroundColor: 'white',
  },
  textFocus: {
    backgroundColor: '#a290ab'
  },
  columns: {
    flexDirection: 'row',
  },
  textColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    // TODO - come up with a color scheme
    backgroundColor: '#5f1679', //'#DDD1E7',
    paddingLeft: 3,
    paddingRight: 3,
  },
  text: {
    fontSize: 20,
    // same weird thing around line height as in App.js
    lineHeight: 26,
    height: 20,
    fontFamily: 'overpass-mono',
    color: 'white'
  },
  cryptoColumn: {
    flex: 1
  }
};

class CryptoCard extends Component {
  propTypes: {
    character: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,

    // redux provided
    highlightedCard: PropTypes.letter.isRequired,
  }

  constructor(props) {
    super(props)

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { character, setCharacter, deleteCharacter } = this.props;
    if (character === '<') {
      deleteCharacter();
    } else {
      setCharacter(character);
    }
  }

  render() {
    const { character, highlightedCard, width, height, children } = this.props;
    const hasFocus = character === highlightedCard;
    const heightStyle = { height };
    return (
      <TouchableHighlight
        style={[
          styles.main,
          hasFocus && styles.focus,
          { width, height }
        ]}
        onPress={this.onPress}
      >
        <View style={[styles.columns, heightStyle]}>
          <View
            style={[
              styles.textColumn,
              (hasFocus && styles.textFocus),
              heightStyle
            ]}
          >
            <Text style={styles.text}>{character}</Text>
          </View>
          <View style={styles.cryptoColumn}>
            {children}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default connect(state => ({
  highlightedCard: highlightedCharacter(state.plaintext)
}), { setCharacter, deleteCharacter })(CryptoCard);
