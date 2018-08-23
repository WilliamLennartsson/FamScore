import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Fonts } from '../src/utils/Fonts'

class MainMenu extends Component {

  renderFamily() {
    console.log('familyObject from redux: ', this.props.familyObject.familyName)
    return (
      <View style={styles.loggedInFamilyContainer}>
        <Text style={styles.loggedInFamilyText}>Family Name: {this.props.familyObject.familyName}</Text>
        <Text style={styles.loggedInFamilyText}>Nickname: {this.props.familyObject.nickName}</Text>
      </View>
    )
  }

    render() {
      console.log('familyObject in render: ', this.props.familyObject.familyName)
      console.log(this.props.family);
      return (
        <View
          style={{
            flex: 1,
            paddingTop: 40,
            alignItems: 'center'
        }}
        >

        {this.renderFamily()}

          <Button
            onPress={() => {
              Actions.ListView();
            }}
            title='Show mission'
            color='#000'
          />
          <Button
            onPress={() => {
              Actions.ShowRewards();
            }}
            title='Rewards'
            color='#000'
          />
          <Button
            onPress={() => {
              Actions.Settings();
            }}
            title='Settings'
            color='#000'
          />
          <Button
            title='Bror'
            color='#000'
          />
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
    marginTop: 40,
    marginBottom: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loggedInFamilyText: {
    fontSize: 30,
    fontFamily: Fonts.amaticBold
  }
})
