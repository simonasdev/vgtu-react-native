import React, {Component} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Groups from './Groups.es6';

const {
  StyleSheet,
} = React;

class App extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ScrollableTabView
        style = {styles.container}
        tabBarPosition="bottom"
      >
        <Groups tabLabel="Groups" />
        <Groups tabLabel="Timetables" />
      </ScrollableTabView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#003a6c',
  },
});

export default App;
