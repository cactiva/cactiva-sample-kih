import { light as lightTheme, mapping } from '@eva-design/eva';
import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/HomeScreen';
import { AppContainer } from './src/libs/navigation.web';

const StackNav = createStackNavigator({
  Home: HomeScreen
}, {
  headerMode: 'none'
});
const Container = AppContainer(StackNav);

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Container />
    </ApplicationProvider>
  );
}
