import React, {PropTypes} from 'react-native';
import Base from '../Base.es6';

const {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

class ListItem extends Base {
  static propTypes = {
    group: PropTypes.shape({ name: PropTypes.string }).isRequired,
    onItemPress: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this._bind('handlePress');
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
