import React from 'react'
import './styles/global.scss';
import './App.scss';
// import { NextUIProvider } from '@nextui-org/react';
import MainPage from './components/main-page';

function App() {
  return (
    // <NextUIProvider>
      <MainPage/>
    // </NextUIProvider>
  );
}

export default App;
