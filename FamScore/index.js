/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import StartPage from './Components/StartPage';
import MainMenu from './Components/MainMenu';
import Router from './Components/Router';

 const App = () => (
 <Router />
  //  <StartPage />
  //  <MainMenu />

);


AppRegistry.registerComponent('FamScore', () => App);
