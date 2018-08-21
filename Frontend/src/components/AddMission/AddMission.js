import React, { Component } from 'react'
import { View, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { showAddMission, addMission } from '../../actions'
import { Input, Button } from '../MainMenu'
import { Fonts } from '../../utils/Fonts'


class AddMission extends Component {
    constructor(props) {
        super(props)

        this.state = {
            missionTitle: '',
            missionDescription: '',
            points: 0
        }
    }

    onMissionTitleChange(text) {
        console.log('text:', text);
        console.log('State: ', this.state)
        
        this.setState({
            missionTitle: text
        })
    }

    onMissionDescriptionChange(text) {
        this.setState({
            missionDescription: text
        })
    }

    onPointsChange(pointsProvided) {
        this.setState({
            points: pointsProvided
        })
    }

    onAddMissionClick() {
        console.log('onAddMissionClick Clicked!');
        
        if (this.state.missionTitle === '' || this.state.missionDescription === '' || this.state.points === 0) {
            return
        }

        addMission({
            points: this.state.points,
            titleText: this.state.missionTitle,
            infoText: this.state.missionDescription
        })

        this.setState({
            missionTitle: '',
            missionDescription: '',
            points: 0
        })
    }
    
  render() {
    return (
      <View style={styles.viewStyle}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.visible}
            onRequestClose={() => {
                alert('New Mission Created!')
            }}
        >
            <View style={styles.viewStyle}>
                <View style={styles.inputContainerStyle}>
                    <Input 
                        style={styles.inputStyle} 
                        label="Title: " 
                        placeholder="Title" 
                        styleText={styles.styleTextStyle}
                        onChangeText={this.onMissionTitleChange.bind(this)} 
                    />
                </View>

                <View style={styles.inputContainerStyle}>
                    <Input 
                        style={styles.inputStyle} 
                        label="Points: " 
                        placeholder="Points" 
                        styleText={styles.styleTextStyle} 
                        onChangeText={this.onPointsChange.bind(this)} 

                    />
                </View>

                <View style={styles.inputContainerStyle}>
                    <Input 
                        style={styles.inputStyle} 
                        label="Description: " 
                        placeholder="Description" 
                        styleText={styles.styleTextStyle} 
                        onChangeText={this.onMissionDescriptionChange.bind(this)} 

                    />
                </View>
                
                <View style={styles.buttonContainerStyle}>
                    <Button style={styles.buttonStyle} onPress={this.onAddMissionClick.bind(this)} >Add</Button>
                    <Button style={styles.buttonStyle}>Cancel</Button>
                </View>
            </View>
            </Modal>
  
      </View>
    )
  }
}

const mapStateToProps = ({ listReducer }) => {
    const { visible } = listReducer
  
    return { visible }
}

export default connect(mapStateToProps, { showAddMission, addMission })(AddMission)

const styles = StyleSheet.create({
    viewStyle: {
        height: 400,
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center'
    },
    buttonContainerStyle: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonStyle: {
        height: 60,
        width: 100,
        borderColor: '#000'
    },
    inputContainerStyle: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 5,
        margin: 5,
    },
    inputStyle: {
        flex: 1
    },
    styleTextStyle: {
        fontFamily: Fonts.amaticBold,
        fontSize: 25,
        margin: 0
    }
})
