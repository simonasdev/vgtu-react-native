import React, {Component} from 'react-native';
import ListItem from './ListItem.es6';

const {
  StyleSheet,
  ListView,
} = React;

class List extends Component {

  constructor(props, context) {
    super(props, context);

    this.renderGroup = this.renderGroup.bind(this);
  }

  renderGroup(group) {
    return (
      <ListItem
        group = {group}
        onItemPress = {this.props.setGroup}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource = {this.props.groups}
        renderRow = {this.renderGroup}
        style = {styles.listView}
      />
    );
  }
}

let styles = StyleSheet.create({
  listView: {
    paddingTop: 10,
  },
});

export default List;
