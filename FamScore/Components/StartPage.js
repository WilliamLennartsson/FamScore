import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';

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
          title='Create Family'
          color='#841484'
          accessibilityLabel='Bror som är stor!'
        />
        <Button
          title='Join Family'
          color='#841484'
          accessibilityLabel='Bror som är stor!'
        />
        <Button
          title='Login to Family'
          color='#841484'
          accessibilityLabel='Bror som är stor!'
        />
      </View>
    );
  }

}

export default StartPage;
