import React, { Component } from 'react';
import { View, Button, ImageBackground } from 'react-native';
import { TextField } from 'react-native-material-textfield';


class CreateFamily extends Component {
  state = {
    name: '',
  };

  render() {
    const { name } = this.state;
    return (
      <ImageBackground source={require('../assets/images/lovelovelove.jpg')} style={{ width: '100%', height: '100%' }} >
        <TextField
          label='FamilyName'
          value={name}
          onChangeText={(phone) => this.setState({ phone })}
        />
      </ImageBackground>
    );
  }
}

export default CreateFamily;
