import React, { Component } from 'react';
import { View, Alert, ImageBackground, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Button } from '../src/components/MainMenu'


class StartPage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/lovelovelove.jpg')} style={{ width: '100%', height: '100%' }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          <View style={styles.buttonContainerStyle}>
            <Button onPress={() => { Actions.CreateFamily() }}>
              Create Family
            </Button>
          </View>


          <View style={styles.buttonContainerStyle}>
            <Button onPress={() => { Actions.JoinFamily() }}>
              Join Family
            </Button>
          </View>

          <View style={styles.buttonContainerStyle}>
            <Button onPress={() => { Actions.LoginFamily() }}>
              Login To Family
            </Button>
          </View>
          
          <View style={styles.buttonContainerStyle}>
            <Button onPress={() => { Actions.MainMenu() }}>
              Main Menu
            </Button>
          </View>
          
        </View>
      </ImageBackground>
    );
  }
}

export default StartPage;

const styles = StyleSheet.create({
  buttonContainerStyle: {
    height: 60,
    width: '50%'
  },
})
