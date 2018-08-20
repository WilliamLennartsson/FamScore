import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Button } from './index'
import { showAddMission } from '../../actions'


import { Fonts } from '../../utils/Fonts'

class AddCard extends Component {
    onButtonPress() {
        this.props.showAddMission()
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                
                <Card style={styles.cardStyle}>
                    <View style={styles.cardItemsStyle}>

                            <View style={styles.cardButtonContainerStyle} >
                                <TouchableOpacity style={styles.addButtonStyle} onPress={this.onButtonPress.bind(this)} ><Text style={styles.addButtonTextStyle}>+</Text></TouchableOpacity>
                            </View>
                        
                    </View>
                </Card>

            </View>
        )
    }
}

export default connect(null, { showAddMission })(AddCard)

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#f4f9f4',
        marginBottom: 10
    },
    scrollViewStyle: {
        paddingTop: 25
    },
    cardButtonContainerStyle: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    titleContainerStyle: {
        width: 'auto',
        height: 'auto',
        borderColor: '#000',
        borderBottomWidth: 1
    },
    titleStyle: {
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: Fonts.amaticBold
    },
    infoStyle: {
        fontSize: 18,
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        fontFamily: Fonts.indieFlower
    },
    infoContainerStyle: {
        width: 150
    },
    cardStyle: {
        backgroundColor: '#c4e3cb',
        borderColor: '#000',
        borderWidth: 2,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    cardSectionStyle: {
        borderColor: '#000'
    },
    pointViewStyle: {
        width: 100,
        height: 100,
        margin: 3,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 100 / 2,
        backgroundColor: '#616161',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4
    },
    pointTextStyle: {
        fontSize: 35,
        alignSelf: 'center',
        color: 'white',
        fontFamily: Fonts.amaticBold
    },
    cardItemsStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    buttonStyle: {
        backgroundColor: '#f4f9f4',
        borderColor: '#000',
        fontFamily: Fonts.amaticBold,
        fontSize: 100
    },
    addButtonTextStyle: {
        fontSize: 70,
        fontFamily: Fonts.amaticBold,
        padding: 0,
        margin: 0,
        color: '#616161'
    },
    addButtonStyle: {
        backgroundColor: '#f4f9f4',
        borderColor: '#000',
        borderRadius: 20,
        padding: 0,
        flex: 1,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center'
    },
})
