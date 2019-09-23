import { light as lightTheme, mapping } from '@eva-design/eva';
import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { AppContainer } from './src/libs/navigation.web';

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <AppContainer />
    </ApplicationProvider>
  );
}
