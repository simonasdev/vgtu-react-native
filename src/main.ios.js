import {AppRegistry} from 'react-native';
import App from './components/App.es6';

class Root extends App {
  static defaultProps = {
    ...App.defaultProps,
  }
}

AppRegistry.registerComponent('VGTUApp', () => Root);
