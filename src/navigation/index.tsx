import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS, // Use transition animation
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
