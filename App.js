import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react';
import { View } from 'react-native';

import Login from './component/Login';

const App = () => {
  useEffect(() => {
    setTimeout(() => { SplashScreen.hide(); }, 2000)
  }, [])

  return (
    <View>
      <Login />
    </View>
  );
};


export default App;
