import './src/utils/wdyr';
/* Libraries */
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
/* Local Files */
import Root from './src/Root.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
