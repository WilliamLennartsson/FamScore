import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../src/components/MainMenu'

import { Fonts } from '../src/utils/Fonts'

class MainMenu extends Component {

  renderFamily() {
    console.log('familyObject from redux: ', this.props.familyObject[0].familyName)
    return (
      <View style={styles.loggedInFamilyContainer}>
        <Text style={styles.loggedInFamilyText}>Family Name: {this.props.familyObject[0].familyName}</Text>
        <Text style={styles.loggedInFamilyText}>Nickname: {this.props.familyObject[0].nickName}</Text>
      </View>
    )
  }

    render() {
      console.log('familyObject in render: ', this.props.familyObject[0].familyName)
      console.log(this.props.family);
      return (
        <View
          style={{
            flex: 1,
            paddingTop: 40,
            alignItems: 'center'
        }}
      >

        <View style={styles.topContainerStyle}>
          {this.renderFamily()}
        </View>

        <View style={styles.bottomContainerStyle}>

          <View style={styles.buttonContainerStyle}>
            <Button
              style={styles.buttonStyle}
              onPress={() => {
                Actions.ListView();
              }}
            >
              Missions
                </Button>
          </View>

          <View style={styles.buttonContainerStyle}>
            <Button
              style={styles.buttonStyle}
              onPress={() => {
                Actions.ShowRewards();
              }}
            >
              Rewards
            </Button>
          </View>

          <View style={styles.buttonContainerStyle}>
            <Button
              style={styles.buttonStyle}
              onPress={() => {
                Actions.Settings();
              }}
              title='Settings'
              color='#000'
            >
              Settings
            </Button>
          </View>

        </View>
        
      </View>
    );
  }
}

const mapStateToProps = ({ familyReducer }) => {
  const { familyObject } = familyReducer

  return { familyObject }
}

export default connect(mapStateToProps, {})(MainMenu)

const styles = StyleSheet.create({
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
