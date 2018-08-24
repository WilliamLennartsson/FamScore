import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ImageBackground, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';
import { Button } from '../src/components/MainMenu';

import { setFamily, setLoggedIn } from '../src/actions'

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
    const bodyy = {
        familyName: this.state.familyName,
        password: this.state.password,
        nickName: this.state.nickName
    }
    fetch('http://localhost:3000/families?familyName=' + this.state.familyName + '&password=' + this.state.password + '&name=' + this.state.nickName)
      .then((response) => {
        console.log('asdasd' + response);
        return response.json();
      }).then((result) => {
        if (result.length > 0) {
          console.log('asdasd11' + result[0].json);
          this.props.setFamily(result[0])
          this.props.setLoggedIn(this.state.nickName, true);
          Actions.MainMenu();
        }
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
        <Button style={styles.buttonStyle} onPress={() => this.loginFamily()}>Login Family</Button>
      </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ familyReducer }) => {
  const { familyObject, nickName, isLoggedIn } = familyReducer

  return { familyObject, nickName, isLoggedIn}
}

export default connect(mapStateToProps, { setFamily, setLoggedIn })(LoginFamily)

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
