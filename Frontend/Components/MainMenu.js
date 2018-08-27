import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../src/components/MainMenu'

import { Fonts } from '../src/utils/Fonts'

class MainMenu extends Component {

  componentWillMount(){
    this.render()
  }

  renderFamily() {
    console.log('familyObject from redux: ', this.props.familyObject.familyName)

    // Varför funkar nickName men inte this.props.nickName???????????
    var nickName = this.props.nickName;
    var currentUser = this.props.familyObject.familyMembers.find(function(member) {
      return member['name'] === nickName;
    });
    console.log('found: ' + currentUser);

    return (
      <View style={styles.loggedInFamilyContainer}>
        <Text style={styles.loggedInFamilyText}>Family Name: {this.props.familyObject.familyName}</Text>
        <Text style={styles.loggedInFamilyText}>Nickname: {this.props.nickName}</Text>
        <Text style={styles.loggedInFamilyText}>Points: {currentUser.points}</Text>
      </View>
    )
  }

  render() {
    console.log('familyObject in render: ', this.props.familyObject)
    console.log('nickname in render: ', this.props.nickName)
    console.log('props in render: ', this.props)

    console.log(this.props.family);
    return (
      <View style={styles.mainViewStyle}>

        <View style={styles.topContainerStyle}>
          {this.renderFamily()}
        </View>

        <View style={styles.bottomContainerStyle}>

          <View style={styles.buttonContainerStyle}>
            <Button style={styles.buttonStyle} onPress={() => { Actions.ListView() }}>
              Add Member
            </Button>
          </View>

        </View>

      </View>
    );
  }
}

const mapStateToProps = ({ familyReducer }) => {
  const { familyObject, nickName, isLoggedIn } = familyReducer

  return { familyObject, nickName, isLoggedIn }
}

export default connect(mapStateToProps, {})(MainMenu)

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  loggedInFamilyContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loggedInFamilyText: {
    fontSize: 30,
    fontFamily: Fonts.amaticBold
  },
  buttonTextStyle: {
    fontSize: 20,
    fontFamily: Fonts.amaticBold
  },
  buttonContainerStyle: {
    height: 60,
    width: '50%'
  },
  topContainerStyle: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainerStyle: {
    height: '70%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
