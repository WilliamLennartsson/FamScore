import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ListItem from '../src/components/MainMenu/ListItem';

export default class ShowRewards extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>


                <ScrollView style={styles.scrollViewStyle}>

                    <ListItem points="500pts" titleText="Fortnite 2h" infoText="Redeem this to play Fortnite for 2h" />

                    <ListItem points="1000pts" titleText="Shoping worth 500kr" infoText="Gives you 500kr to shop with" />

                    <ListItem points="600pts" titleText="Massage 30min" infoText="Redeem this to get a massage for 30min from admin" />

                    <ListItem points="200pts" titleText="Alonetime 3h" infoText="Redeem this to get some alonetime " />

                    <ListItem points="50pts" titleText="Do The Dishes" infoText="Do all the dishes and clean the kitchen" />

                    <ListItem points="150pts" titleText="Edd?" infoText="Play pubG with squad" />

                    <ListItem points="1000pts" titleText="Holla Holla" infoText="Get dolla" />

                    <ListItem points="2000pts" titleText="Hallå" infoText="Hej hej. Hallå ja" />

                    <View style={{ height: 20, opacity: 0 }} />

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    scrollViewStyle: {
        backgroundColor: '#f4f9f4'
    }
})
