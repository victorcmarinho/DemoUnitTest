import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {CountProvider} from './context/count';
import {Home} from './Pages/Home';
import SplashScreen from 'react-native-lottie-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar />
      <CountProvider>
        <Home />
      </CountProvider>
    </>
  );
};

export default App;
