import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Fonts } from '../../utils/Fonts'

class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.buttonStyle, this.props.style]}>
        <Text style={styles.textStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

export { Button }

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 3,
        marginBottom: 3
    },
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 24,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
        margin: 5,
        fontFamily: Fonts.amaticBold
    }
}
