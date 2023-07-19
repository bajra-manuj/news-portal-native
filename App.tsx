/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import CategoryScreen from './screens/CategoryScreen';
import HomeScreen from './screens/HomeScreen';
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Categories" component={CategoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
