import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './MainMenu';
import StartPage from './StartPage';
import ToDoList from '../src/components/MainMenu/ToDoList';
import Settings from './Settings';
import Rewards from './Rewards';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='MainMenu' component={MainMenu} title='Main Menu' initial />
        <Scene key='StartPage' component={StartPage} title='StartPage' />
        <Scene key='ListView' component={ToDoList} title='List' />
        <Scene key='Settings' component={Settings} title='Settings' />
        <Scene key='Rewards' component={Rewards} title='Rewards' />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
