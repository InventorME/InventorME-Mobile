import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/LogInScreen/LogIn';
import MainMenu from './src/screens/MainPage/mainPage';

const navigator = createStackNavigator(
  {
    HomeScreen,
    MainMenu,
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'InventorMe',
    },
  }
);

export default createAppContainer(navigator);
