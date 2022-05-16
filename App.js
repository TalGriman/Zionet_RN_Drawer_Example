import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawer from './navigators/MainDrawer';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </>
  );
}


