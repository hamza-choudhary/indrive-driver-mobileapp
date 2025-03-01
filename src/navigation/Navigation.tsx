import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '@screens';
import {ROUTES} from './routes';

const RootStack = createNativeStackNavigator({
  screens: {
    [ROUTES.LOGIN]: {
      screen: Login,
      options: {headerShown: false},
    },
    [ROUTES.SIGNUP]: {
      screen: Signup,
      options: {headerShown: false},
    },
  },
  initialRouteName: ROUTES.SIGNUP,
});

export const Navigation = createStaticNavigation(RootStack);
