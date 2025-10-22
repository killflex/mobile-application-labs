import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ProductProvider } from './context/ProductContext';
import AppNavigator from './navigation/AppNavigator';

import './global.css';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ProductProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </ProductProvider>
    </GestureHandlerRootView>
  );
}
