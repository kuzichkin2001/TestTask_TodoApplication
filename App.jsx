import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Navigator from './routes/homeStack';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      'din-pro': require('./assets/fonts/DINPro.otf'),
    });
    setFontsLoaded(true);
  }, []);

  return fontsLoaded
    ? (
      <>
        <Navigator />
        <StatusBar style="light" backgroundColor="#142654" />
      </>
    )
    : <ActivityIndicator size="large" color="blue" />;
}

export default App;
