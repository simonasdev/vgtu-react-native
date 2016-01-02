import React, {Component} from 'react-native';

const {
  View,
  TextInput,
  StyleSheet,
} = React;

class Search extends Component {

  constructor(props, context) {
    super(props, context);

    this._getGroups = this._getGroups.bind(this);
  }

  _getGroups(query) {
    fetch(this.props.url + query)
      .then((response) => response.json())
      .then(this.props.setGroups)
      .done();
  }

  render() {
    return (
      <View
        style = {styles.container}
      >
        <TextInput
          onChangeText = {this.getGroups}
          onSubmitEditing = {this.getGroups}
          placeholder = "Enter your group bitch"
          style = {styles.input}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  clear: {
    fontSize: 12,
  },
});

export default Search;
