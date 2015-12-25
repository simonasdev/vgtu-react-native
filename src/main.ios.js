import {AppRegistry} from 'react-native';
import App from './components/App';

class Root extends App {
  static defaultProps = {
    ...App.defaultProps,
  }
}

AppRegistry.registerComponent('VGTUApp', () => Root);
