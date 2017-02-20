import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { TouchableHighlight } from 'react-native';
import { setCharacter, highlightedCharacter } from './redux/plaintext';

const styles = {
  main: {
    backgroundColor: 'white',
    margin: 5,
  },
  focus: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black'
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
    return (
      <TouchableHighlight
        style={[
          styles.main,
          (hasFocus && styles.focus),
          { width, height }
        ]}
        onPress={this.onPress}
      >
        {children}
      </TouchableHighlight>
    );
  }
}

export default connect(state => ({
  highlightedCard: highlightedCharacter(state.plaintext)
}), { setCharacter })(CryptoCard);
