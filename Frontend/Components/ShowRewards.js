import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ListItem from '../src/components/MainMenu/ListItem';
import RewardCard from '../src/components/RewardCard/RewardCard'

export default class ShowRewards extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>

                <ScrollView style={styles.scrollViewStyle}>

                    <RewardCard points="500pts" titleText="Fortnite 2h" infoText="Redeem this to play Fortnite for 2h" />

                    <RewardCard points="1000pts" titleText="Shoping worth 500kr" infoText="Gives you 500kr to shop with" />

                    <RewardCard points="600pts" titleText="Massage 30min" infoText="Redeem this to get a massage for 30min from admin" />

                    <RewardCard points="200pts" titleText="Alonetime 3h" infoText="Redeem this to get some alonetime " />

                    <RewardCard points="50pts" titleText="Do The Dishes" infoText="Do all the dishes and clean the kitchen" />

                    <RewardCard points="150pts" titleText="Edd?" infoText="Play pubG with squad" />

                    <RewardCard points="1000pts" titleText="Holla Holla" infoText="Get dolla" />

                    <RewardCard points="2000pts" titleText="Hallå" infoText="Hej hej. Hallå ja" />

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
