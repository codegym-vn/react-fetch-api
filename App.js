import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import ListUsers from "./src/components/ListUsers"

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ListUsers/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50
    },
})
