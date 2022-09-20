import React, { memo, useMemo } from 'react';
import { useTheme } from '@emotion/react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Movie, Search, Tv } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => {
  const theme = useTheme();

  const screenOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      headerStyle: {
        backgroundColor: theme.background,
      },
      headerTitleStyle: {
        color: theme.text,
      },
      tabBarStyle: {
        backgroundColor: theme.background,
      },
      tabBarActiveTintColor: theme.active,
      tabBarInactiveTintColor: theme.inactive,
    };
  }, [theme]);

  return (
    <Navigator initialRouteName="Movie" screenOptions={screenOptions}>
      <Screen name="Movie" component={Movie} />
      <Screen name="Tv" component={Tv} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default memo(BottomTabs);