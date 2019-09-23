import { light as lightTheme, mapping } from '@eva-design/eva';
import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { AppContainer } from './src/libs/navigation.web';
import HomeScreen from './src/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';
const StackNav = createStackNavigator({
  'Home': HomeScreen
}); 
const Container = AppContainer(StackNav);;

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      
    </ApplicationProvider>
  );
}
