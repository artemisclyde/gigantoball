import React from 'react'
import './App.scss';
import { NextUIProvider } from '@nextui-org/react';
import MainPage from './components/main-page';

function App() {
  return (
    <NextUIProvider>
      <MainPage/>
    </NextUIProvider>
  );
}

export default App;
