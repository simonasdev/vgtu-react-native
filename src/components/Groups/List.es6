import React, {PropTypes} from 'react-native';
import Base from '../Base.es6';
import ListItem from './ListItem.es6';

const {
  StyleSheet,
  ListView,
} = React;

class List extends Base {
  static propTypes = {
    groups: PropTypes.instanceOf(ListView.DataSource).isRequired,
    setGroup: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this._bind('renderGroup');
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
    flex: 90,
  },
});

export default List;
