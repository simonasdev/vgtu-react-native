import React, {PropTypes} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import Base from '../Base.es6';

const {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

class Search extends Base {
  static propTypes = {
    debounce: PropTypes.number,
    setGroups: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  }

  static defaultProps = {
    debounce: 300,
  }

  constructor(props, context) {
    super(props, context);

    this._bind('handleChange', 'clearInput', 'handleFocus', 'handleBlur');
    this.getGroups = _.debounce(this.getGroups.bind(this), this.props.debounce);
  }

  state = {
    query: '',
    focused: false,
  }

  getGroups() {
    fetch(this.props.url + this.state.query)
      .then((response) => response.json())
      .then(this.props.setGroups)
      .done();
  }

  handleBlur() {
    this.setState({ focused: false });
  }

  handleChange(text) {
    this.setState({ query: text });

    this.getGroups();
  }

  handleFocus() {
    this.setState({ focused: true });
  }

  clearInput() {
    this.setState({ query: '' });
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          autoFocus
          onBlur = {this.handleBlur}
          onChangeText = {this.handleChange}
          onFocus = {this.handleFocus}
          placeholder = "Enter your group name"
          placeholderTextColor = "#1b7fec"
          style = {styles.input}
          underlineColorAndroid = {this.state.focused ? '#fff' : '#1b7fec'}
          value = {this.state.query}
        />
        <TouchableHighlight
          activeOpacity = {0.7}
          onPress = {this.clearInput}
          underlayColor = "#003a6c"
        >
          <Icon
            color = "#fff"
            name = "clear"
            size = {30}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#fff',
  },
});

export default Search;
