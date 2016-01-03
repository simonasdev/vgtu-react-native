import React, {Component} from 'react-native';

const {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

class ListItem extends Component {

  constructor(props, context) {
    super(props, context);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.props.onItemPress(this.props.group);
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity = {0.9}
        onPress = {this.handlePress}
        style = {styles.container}
        underlayColor = {styles.container.backgroundColor}
      >
        <View
          style = {styles.item}
        >
          <Text style={styles.text}>{this.props.group.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1b7fec',
  },
  text: {
    fontSize: 22,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default ListItem;
