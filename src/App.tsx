import React from 'react';
import { StatusBar } from 'react-native';
import { CountProvider } from './context/count';
import { Home } from './Pages/Home';

const App = () => {
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
