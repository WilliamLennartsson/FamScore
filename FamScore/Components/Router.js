import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './MainMenu';
import StartPage from './StartPage';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='MainMenu' component={MainMenu} title='Main Menu' initial />
        <Scene key='StartPage' component={StartPage} title='StartPage'  />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
