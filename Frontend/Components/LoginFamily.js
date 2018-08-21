import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';
import { Button } from '../src/components/MainMenu'

class LoginFamily extends Component {

  constructor(props) {
    super(props);
    this.state = {
        familyName: '',
        password: '',
        nickName: '',
      };
      this.loginFamily = this.loginFamily.bind(this);
  }

  loginFamily() {
    fetch('http://localhost:3000/families')
      .then(function (response) {
        return response.json();
      }).then(function (result) {
        console.log(result);
      });
}
  render() {
    const { familyName } = this.state;
    const { password } = this.state;
    const { nickName } = this.state;
    return (
      <ImageBackground source={require('../assets/images/lovelovelove.jpg')} style={{ width: '100%', height: '100%' }} >
        <TextField
          label='FamilyName'
          value={familyName}
          color='#000'
          baseColor='#000000'
          tintColor='#616161'
          onChangeText={value => this.setState({ familyName: value })}
        />
        <TextField
          label='Password'
          baseColor='#000'
          tintColor='#616161'
          secureTextEntry
          value={password}
          onChangeText={value => this.setState({ password: value })}
        />
        <TextField
          label='Nickname'
          baseColor='#000'
          tintColor='#616161'
          value={nickName}
          onChangeText={value => this.setState({ nickName: value })}
        />
      <View style={styles.viewStyle}>
        <Button style={styles.buttonStyle} onPress={() => this.loginFamily}>Create Family</Button>
      </View>
      </ImageBackground>
    );
  }
}


export default LoginFamily;

const styles = {
  buttonStyle: {
    backgroundColor: '#f4f9f4',
    borderColor: '#000'
  },
  viewStyle: {
    height: 60,
    justifyContent: 'center'
  }
}
