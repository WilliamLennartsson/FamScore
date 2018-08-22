import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { ImageBackground, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from '../src/components/MainMenu'


class CreateFamily extends Component {

  constructor(props) {
    super(props);
    this.state = {
        familyName: '',
        password: '',
        nickName: '',
      };
      this.createFamily = this.createFamily.bind(this);
  }

  createFamily() {
    console.log('Create Family ran')
    const bodyy = {
        familyName: this.state.familyName,
        password: this.state.password,
        nickName: this.state.nickName
    }
    fetch('http://localhost:3000/families', {
      body: JSON.stringify(bodyy),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST' })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      Actions.MainMenu({ family: { bodyy } });
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
      {
      // <Button
      //   onPress={() => {
      //     fetch('http://localhost:3000')
      //     .then(function (response) {
      //       console.log(response);
      //       return response.text();
      //     })
      //     .then(function (result) {
      //       console.log(result);
      //     });
      //     }
      //   }
      //   title='Create'
      //   color='#000'
      // />
      }
      <View style={styles.viewStyle}>
        <Button style={styles.buttonStyle} onPress={() => this.createFamily()}>Create Family</Button>
      </View>
      </ImageBackground>
    );
  }
}


export default CreateFamily;

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
