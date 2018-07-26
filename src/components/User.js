import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text, Button, Image, StyleSheet} from 'react-native'

class User extends Component {
    _handleRemoveUser = ()=> {
        this.props.onRemove(this.props.user.id)
    }

    render() {
        const {user} = this.props

        return (
            <View style={styles.container}>
                <Text>{user.first_name} {user.last_name}</Text>
                <Image style={styles.avatar} source={{uri: user.avatar}}/>

                <Button title='x' onPress={this._handleRemoveUser}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    avatar: {
        width: 40,
        height: 40
    }
})

User.propTypes = {
    user: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default User