import React, {Component} from 'react-native';

const {
  StyleSheet,
  Text,
  ListView,
  View,
} = React;

class List extends Component {

  constructor(props, context) {
    super(props, context);
  }

  renderGroup(group) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{group.name}</Text>
      </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default List;
