import {Component} from 'react-native';

class Base extends Component {

  _bind(...props) {
    props.forEach(prop => this[prop] = this[prop].bind(this));
  }
}

export default Base;
