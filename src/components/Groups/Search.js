import React, {Component} from 'react-native';

const {
  View,
  TextInput,
  Text,
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
      <View>
        <Text>
          Back
        </Text>
        <TextInput
          onChangeText = {this.getGroups}
          onSubmitEditing = {this.getGroups}
          placeholder = "Enter your group name"
        />
      </View>
    );
  }
}

export default Search;
