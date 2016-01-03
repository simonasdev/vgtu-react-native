import React, {Component} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Orientation from 'react-native-orientation';
import Groups from './Groups.es6';
import Timetable from './Timetable.es6';

const {
  StyleSheet,
} = React;

class App extends Component {

  constructor(props, context) {
    super(props, context);

    Orientation.lockToPortrait();
  }

  render() {
    return (
      <ScrollableTabView
        style = {styles.container}
        tabBarPosition="bottom"
      >
        <Groups tabLabel="Groups" />
        <Timetable tabLabel="Timetable" />
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
