import React, {Component} from 'react-native';
import Search from './Groups/Search.es6';
import List from './Groups/List.es6';

const {
  ListView,
  View,
  Text,
} = React;

class Groups extends Component {
  constructor(props, context) {
    super(props, context);

    this.setGroups = this.setGroups.bind(this);
    this.setGroup = this.setGroup.bind(this);
  }

  state = {
    groups: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    currentGroup: {},
  }

  setGroups(groups) {
    this.setState({
      groups: this.state.groups.cloneWithRows(groups),
    });
  }

  setGroup(group) {
    this.setState({
      currentGroup: group,
    });
  }

  render() {
    return (
      <View>
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

export default Groups;
