import React, {Component} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

const {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} = React;

class Search extends Component {
  static defaultProps = {
    debounce: 300,
  }

  constructor(props, context) {
    super(props, context);

    ['handleChange', 'clearInput', 'handleFocus', 'handleBlur'].forEach((prop) => {
      this[prop] = this[prop].bind(this);
    });

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
      <View
        style = {styles.container}
      >
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#FFF',
  },
});

export default Search;
