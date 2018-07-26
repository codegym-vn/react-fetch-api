import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Pagination extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.total}</Text>
            </View>
        )
    }
}

export default Pagination