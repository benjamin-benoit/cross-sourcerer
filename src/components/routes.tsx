import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Profil from './Profil/index';

const App = createStackNavigator(
    {
      Screen1: {
        screen: Profil,
      },
    },
    {
      initialRouteName: 'Screen1',
    }
  );
  
  export default createAppContainer(App);