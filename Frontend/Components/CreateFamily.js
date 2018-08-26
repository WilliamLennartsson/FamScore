import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ImageBackground, View, ScrollView, LayoutAnimation } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from '../src/components/MainMenu'
import { setFamily } from '../src/actions'

class CreateFamily extends Component {
  constructor(props) {
    super(props);
    this.state = {
        familyName: '',
        password: '',
        familyMembers: [],
        numberOfMembers: 0,
      };
      this.createFamily = this.createFamily.bind(this);
      this.renderFields = this.renderFields.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  createFamily() {
    const newFamilyArray = [];
    console.log('refs: ', this.refs)
    

    for (let i = 0; i < this.state.numberOfMembers; i++) {
      newFamilyArray.push({
        name: this.refs[`name${i}`].state.text,
        points: 0,
        isLoggedIn: false,
      })
    }
    console.log(newFamilyArray)

    this.setState({
      familyMembers: newFamilyArray
    });
  
    const bodyy = {
        familyName: this.state.familyName,
        password: this.state.password,
        familyMembers: newFamilyArray,
    }
    console.log('family bodyyy: ', bodyy);
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
      this.props.setFamily(bodyy);
      Actions.LoginFamily_Key();
    });
}

renderFields() {
  console.log(this.state.familyMembers);
  const familyArray = [];
  const x = this.state.numberOfMembers;
  for (let i = 0; i < x; i++) {
    familyArray.push(<TextField
      label='Name'
      ref={'name' + i}
      value={this.refs.name}
    />
    )
    console.log('brorhund');
  }
  console.log(this.refs);
  return <View>{familyArray}</View>
}

  render() {
    const { familyName, password, familyMembers, numberOfMembers } = this.state;

    return (
      <ImageBackground source={require('../assets/images/lovelovelove.jpg')} style={{ width: '100%', height: '100%' }} >

        <ScrollView>
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
            label='Number of members'
            baseColor='#000'
            tintColor='#616161'
            value={+numberOfMembers}
            onChangeText={value => this.setState({ numberOfMembers: value })}
          />
          {this.renderFields()}
          {console.log('körs denna?')}

        <View style={styles.viewStyle}>
          <Button style={styles.buttonStyle} onPress={() => this.createFamily()}>Create Family</Button>
        </View>

        </ScrollView>
    </ImageBackground>


    );
  }
}


const mapStateToProps = ({ familyReducer }) => {
  const { familyObject } = familyReducer

  return { familyObject }
}

export default connect(mapStateToProps, { setFamily })(CreateFamily)

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
