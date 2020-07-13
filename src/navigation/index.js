import {createAppContainer} from 'react-navigation';
import AppStackNavigator from './AppStackNavigator';

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer