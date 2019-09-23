import { light as lightTheme, mapping } from '@eva-design/eva';
import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation-stack';
import { AppContainer } from './src/libs/navigation.web';

function importAll(r) {
  return r.keys().map(name => {
    return { name, module: r(name) };
  });
}

const images = importAll(require.context('./src', true, /\.(tsx)$/));
console.log(images);
const StackNav = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: 'none'
  }
);
const Container = AppContainer(StackNav);

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Container />
    </ApplicationProvider>
  );
}
