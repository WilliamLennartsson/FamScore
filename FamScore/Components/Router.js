import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { StyleSheet } from 'react-native'
import MainMenu from './MainMenu';
import StartPage from './StartPage';
import ToDoList from '../src/components/MainMenu/ToDoList';
import Settings from './Settings';
import Rewards from './Rewards';
import CreateFamily from './CreateFamily';
import JoinFamily from './JoinFamily';

import { Fonts } from '../src/utils/Fonts'


const RouterComponent = () => {
  return (
    <Router navigationBarStyle={styles.sceneStyle} titleStyle={styles.titleStyle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
      <Scene key='root'>
        <Scene key='MainMenu' component={MainMenu} title='Main Menu' />
        <Scene key='StartPage' component={StartPage} title='StartPage' initial />
        <Scene key='ListView' component={ToDoList} title='Mission List' />
        <Scene key='Settings' component={Settings} title='Settings' />
        <Scene key='Rewards' component={Rewards} title='Rewards' />
        <Scene key='CreateFamily' component={CreateFamily} title='Create Family' />
        <Scene key='JoinFamily' component={JoinFamily} title='Join an existing family' />
      </Scene>

    </Router>
  );
};

export default RouterComponent;

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
  barButtonTextStyle: {
    color: 'white'
  },
  barButtonIconStyle: {
    tintColor: 'white'
  }
})
