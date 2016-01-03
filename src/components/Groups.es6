import React from 'react-native';
import Base from './Base.es6';
import Search from './Groups/Search.es6';
import List from './Groups/List.es6';

const {
  ListView,
  View,
  Text,
  StyleSheet,
} = React;

class Groups extends Base {

  constructor(props, context) {
    super(props, context);

    this._bind('setGroups', 'setGroup');
  }

  state = {
    groups: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    currentGroup: {},
  }

  setGroups(groups) {
    this.setState({ groups: this.state.groups.cloneWithRows(groups) });
  }

  setGroup(group) {
    this.setState({ currentGroup: group });
  }

  render() {
    return (
      <View style = {styles.container}>
        <Search
          setGroups = {this.setGroups}
          url = "http://vgtu.herokuapp.com/groups/search?q="
        />
        <Text>{this.state.currentGroup.name}</Text>
        <List
          groups = {this.state.groups}
          setGroup = {this.setGroup}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Groups;
