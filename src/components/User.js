import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text, Button, Image, StyleSheet} from 'react-native'

class User extends Component {
    _handleRemoveUser = () => {
        this.props.onRemove(this.props.user.id)
    }

    render() {
        const {user} = this.props
        const avatar = user.avatar || `https://www.gravatar.com/avatar/${user.id}?d=retro`
        const {first_name, last_name, name} = user

        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.avatar} source={{uri: avatar}}/>
                    <Text>
                        {
                            name ? name : `${first_name} ${last_name}`
                        }
                        </Text>
                </View>

                <View style={styles.right}>
                    <Button style={styles.remove} title='x' onPress={this._handleRemoveUser}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    right: {},

    remove: {
        color: 'red'
    },

    avatar: {
        width: 60,
        height: 60,
        marginRight: 10
    }
})

User.propTypes = {
    user: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default User