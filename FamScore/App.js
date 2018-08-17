import React, { Component } from 'react';
import { createStackNavigator } from 'react-native-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MainMenu from './src/components/MainMenu/MainMenu'

export default class App extends Component {
  render() {
    return (
      <MainMenu />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
