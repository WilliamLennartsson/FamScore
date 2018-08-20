import React, { Component } from 'react'
import { View, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { showAddMission } from '../../actions'

class AddMission extends Component {
    
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
            <View style={{ marginTop: 20 }}>
                <Text>Tjena</Text>
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

export default connect(mapStateToProps, { showAddMission })(AddMission)

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: 20,
        marginBottom: 20
    }
})
