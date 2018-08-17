import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'

class StartPage extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          onPress={() => {
            Actions.CreateFamily();
          }}
          title='Create Family'
          color='#841484'
          accessibilityLabel='Bror som är stor!'
        />
        <Button
          onPress={() => {
            Actions.JoinFamily();
          }}
          title='Join Family'
          color='#841484'
          accessibilityLabel='Bror som är stor!'
        />
        <Button
          title='Login to Family'
          color='#841484'
          accessibilityLabel='Bror som är stor!'
        />
      <Button
        onPress={() => {
          Actions.MainMenu();
        }}
        title='MainMenu'
        color='#841484'
      />
      </View>
    );
  }
}

export default StartPage;
