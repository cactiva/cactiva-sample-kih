import { light as lightTheme, mapping } from '@eva-design/eva';
import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation-stack';
import { AppContainer } from './src/libs/navigation.web';

function importAllRoute(r) {
  const routes = {};
  r.keys().map(name => {
    routes[name] = r(name);
  });
  return routes;
}

const routes = importAllRoute(require.context('./src', true, /\.(tsx)$/));
const StackNav = createStackNavigator(
  routes,
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
