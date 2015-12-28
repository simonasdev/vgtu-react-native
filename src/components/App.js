import React, {Component} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Groups from './Groups.js';

class App extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
      >
        <Groups tabLabel="Groups" />
        <Groups tabLabel="Groups" />
      </ScrollableTabView>
    );
  }
}

export default App;
