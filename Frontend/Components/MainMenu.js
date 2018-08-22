import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MainMenu extends Component {

  renderFamily() {
    console.log('familyObject from redux: ', this.props.familyObject.familyName)
    return (
      <Text>{this.props.familyObject[0].familyName}</Text>
    )
  }

    render() {
      console.log('familyObject in render: ', this.props.familyObject[0].familyName)
      console.log(this.props.family); 
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
        <View style={{ height: 50, width: '90%' }}>
          <Text style={{ color: '#000', fontSize: 30 }}>{this.renderFamily}</Text>
        </View>
        
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
