import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MainMenu extends Component {


    render() {
      console.log(this.props.family); 
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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

export default MainMenu;
