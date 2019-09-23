import { light as lightTheme, mapping } from '@eva-design/eva';
import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation-stack';
import { AppContainer } from './src/libs/navigation.web';
import HomeScreen from './src/HomeScreen';

function importAllRoute(r) {
  const routes = {};
  r.keys().map(name => {
    const finalName = name.substr(2, name.length - 6);
    if (finalName.indexOf('libs/') === 0) return;
    routes[finalName] = r(name).default;
  });
  return routes;
}
const routes = importAllRoute(require.context('./src', true, /\.(tsx)$/));
const StackNav = createStackNavigator(routes, {
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
