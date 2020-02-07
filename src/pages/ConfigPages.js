import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
const ConfigPages = createStackNavigator(
  {
    LoginScreen: {
      screen: Login,
    },
    HomeScreen: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
  },
);
export default createAppContainer(ConfigPages);
