import React, {Component} from 'react-native';
import Search from './Groups/Search';
import List from './Groups/List';

const {
  ListView,
  View,
} = React;

class Groups extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      groups: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };

    this._setGroups = this._setGroups.bind(this);
  }

  _setGroups(groups) {
    this.setState({
      groups: this.state.groups.cloneWithRows(groups),
    });
  }

  render() {
    return (
      <View>
        <Search
          setGroups = {this._setGroups}
          url = "http://vgtu.herokuapp.com/groups/search?q="
        />
        <List
          groups = {this.state.groups}
        />
      </View>
    );
  }
}

export default Groups;
