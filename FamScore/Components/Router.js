import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './MainMenu';
import StartPage from './StartPage';
import ToDoList from '../src/components/MainMenu/ToDoList';
import Settings from './Settings';
import Rewards from './Rewards';
import CreateFamily from './CreateFamily';
import JoinFamily from './JoinFamily';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='MainMenu' component={MainMenu} title='Main Menu' />
        <Scene key='StartPage' component={StartPage} title='StartPage' initial />
        <Scene key='ListView' component={ToDoList} title='List' />
        <Scene key='Settings' component={Settings} title='Settings' />
        <Scene key='Rewards' component={Rewards} title='Rewards' />
        <Scene key='CreateFamily' component={CreateFamily} title='Create Family' />
        <Scene key='JoinFamily' component={JoinFamily} title='Join an existing family' />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
