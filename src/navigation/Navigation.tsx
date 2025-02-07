import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '@screens';
import {ROUTES} from './routes';

const RootStack = createNativeStackNavigator({
  screens: {
    [ROUTES.LOGIN]: {
      screen: Login,
      options: {headerShown: false},
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
