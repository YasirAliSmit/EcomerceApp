/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import Store from './Components/Store/Store';
const Redux = () => (
    <Provider store={Store}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => Redux);
