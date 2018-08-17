import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { Header } from './index'
import ListItem from './ListItem'

import { Fonts } from '../../utils/Fonts'

export default class MainMenu extends Component {
  render() {
    return (
        <View style={styles.viewStyle}>
        <Header headerText="Make Your Mama Proud" />

        <ScrollView style={styles.scrollViewStyle}>

            <ListItem points="50pts" titleText="Do The Dishes" infoText="Do all the dishes and clean the kitchen" />

            <ListItem points="150pts" titleText="Edd?" infoText="Play pubG with squad" />

            <ListItem points="1000pts" titleText="Holla Holla" infoText="Get dolla" />

            <ListItem points="200pts" titleText="Laundry" infoText="Laundry all the clothes in the laundry room and iron" />

        </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#f4f9f4'
    },
    scrollViewStyle: {
        paddingTop: 25
    }
})
