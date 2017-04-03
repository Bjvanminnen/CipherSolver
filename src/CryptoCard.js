import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { TouchableHighlight, View, Text, Platform } from 'react-native';
import { setCharacter, highlightedCharacter } from './redux/plaintext';

const styles = {
  main: {
    backgroundColor: 'white',
    margin: 5,
  },
  // TODO - this is kind of broken now, but highlighting might not be the right
  // approach anyways
  focus: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black'
  },
  columns: {
    flexDirection: 'row',
  },
  textColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    // TODO - come up with a color scheme
    backgroundColor: '#DDD1E7',
    paddingLeft: 3,
    paddingRight: 3,
  },
  text: {
    fontSize: 20,    
    fontFamily: 'overpass-mono'
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
    const { character, setCharacter } = this.props;
    setCharacter(character);
  }

  render() {
    const { character, highlightedCard, width, height, children } = this.props;
    const hasFocus = character === highlightedCard;
    const heightStyle = { height };
    return (
      <TouchableHighlight
        style={[
          styles.main,
          (hasFocus && styles.focus),
          { width, height }
        ]}
        onPress={this.onPress}
      >
        <View style={[styles.columns, heightStyle]}>
          <View style={[styles.textColumn, heightStyle]}>
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
}), { setCharacter })(CryptoCard);
