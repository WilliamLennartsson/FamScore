import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native'
import MainMenu from './MainMenu';
import StartPage from './StartPage';
import ToDoList from '../src/components/MainMenu/ToDoList';
import Settings from './Settings';
import CreateFamily from './CreateFamily';
import JoinFamily from './JoinFamily';
import ShowRewards from './ShowRewards';
import { showAddMission } from '../src/actions'
import LoginFamily from './LoginFamily'
import { Button } from '../src/components/MainMenu'

import { Fonts } from '../src/utils/Fonts'

class RouterComponent extends Component {


  render() {
  return (
    <Router navigationBarStyle={styles.sceneStyle} titleStyle={styles.titleStyle} tintColor={'white'}>
      <Scene key='root' backButtonTextStyle={styles.backButtonTextStyle} >
        <Scene key='StartPage' component={StartPage} title='Start Page' initial />
        <Scene key='MainMenu' component={MainMenu} title='Main Menu' />
        <Scene key='ListView' component={ToDoList} title='Mission List' />
        <Scene key='Settings' component={Settings} title='Settings' />
        <Scene key='ShowRewards' component={ShowRewards} title='Rewards' />
        <Scene key='CreateFamily' component={CreateFamily} title='Create Family' />
        <Scene key='JoinFamily' component={JoinFamily} title='Join an existing family' />
        <Scene key="LoginFamily" component={LoginFamily} title='Login to your family' />
      </Scene>
    </Router>
  )
}
}

export default RouterComponent

const styles = StyleSheet.create({
  sceneStyle: {
    backgroundColor: '#616161',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  titleStyle: {
    fontSize: 30,
    color: 'white',
    fontFamily: Fonts.amaticBold
  },
  backButtonTextStyle: {
    color: '#616161'
  },
  backButtonIconStyle: {
    tintColor: 'white'
  },
  rightButtonViewStyle: {
    paddingRight: 15,
    paddingBottom: 10
  },
  rightButtonStyle: {
    fontSize: 50,
    color: 'white',
    zIndex: 10,
    marginRight: 15,
    padding: 0,
    height: 50,
    width: 50,
    borderRadius: 50 / 2
  }
})
