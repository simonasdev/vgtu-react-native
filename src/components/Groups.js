import React, {Component} from 'react-native';

const {
  StyleSheet,
  TextInput,
  View,
} = React;

class Groups extends Component {

  static defaultProps = {
    ...Component.defaultProps,
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your group name"
          style={styles.welcome}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Groups;
