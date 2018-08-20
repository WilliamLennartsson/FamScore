import React, { Component } from 'react';
import { Button, ImageBackground } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';

class CreateFamily extends Component {
  state = {
    name: '',
    password: ''
  };

  render() {
    const { name } = this.state;
    const { password } = this.state;
    return (
      <ImageBackground source={require('../assets/images/lovelovelove.jpg')} style={{ width: '100%', height: '100%' }} >
        <TextField
          label='FamilyName'
          value={name}
          color='#000'
          baseColor='#000000'
          tintColor='#616161'
          onChangeText={(name) => this.setState({ name })}
        />
        <TextField
          label='Password'
          baseColor='#000'
          tintColor='#616161'
          secureTextEntry
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
      <Button
        onPress={() => {
          Actions.MainMenu();
        }}
        title='Create'
        color='#000'
      />
        <Button
          title='Create'
          color='#000'
        />
      </ImageBackground>
    );
  }
}

export default CreateFamily;
