import React, { Component } from 'react'
import {
    ScrollView,
    View,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { deleteItem } from '../../actions'
import ListItem from './ListItem'


class MainMenu extends Component {
    renderList() {
        return this.props.list.map((item, index) => 
            <ListItem 
            key={index} 
            titleText={item.titleText}
            infoText={item.infoText}
            points={item.points} 
            />
        )
    }

    render() {
        return (
            <View style={styles.viewStyle}>

                <ScrollView style={styles.scrollViewStyle}>

                    {this.renderList()}

                    <View style={{ height: 20, opacity: 0 }} />

                </ScrollView>

            </View>
        )
    }
}

const mapStateToProps = ({ listReducer }) => {
    const { list } = listReducer
  
    return { list }
  }
  
export default connect(mapStateToProps, { deleteItem })(MainMenu)

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    scrollViewStyle: {
        backgroundColor: '#f4f9f4'
    }
})
