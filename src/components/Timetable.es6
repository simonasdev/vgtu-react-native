import React from 'react-native';
import Base from './Base.es6';

const {
  View,
  Text,
  StyleSheet,
} = React;

class Timetable extends Base {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View
        style = {styles.container}
      >
        <Text>Čia bus tavo paskaitos</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Timetable;
