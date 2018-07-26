import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class FormCreateUser extends Component {
    state = {
        name: ''
    }

    _handleOnChangeText = text => {
        this.setState({
            name: text
        })
    }

    _submit = () => {
        const {name} = this.state
        if (!name) {
            return
        }

        this.props.onCreateUser(name)
        this.setState({
            name: ''
        })
    }

    _handlePressButton = () => {
        this._submit()
    }

    _handleSubmit = () => {
        this._submit()
    }

    render() {
        const {name} = this.state

        return (
            <View style={styles.container}>
                <TextInput
                    onSubmitEditing={this._handleSubmit}
                    placeholder='Name'
                    style={styles.textInput} value={name} onChangeText={this._handleOnChangeText}/>

                <Button disabled={!name} onPress={this._handlePressButton} title='+'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 20,
    },
    textInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "gray",
        borderWidth: 1,
        flex: 1
    },
})

FormCreateUser.propTypes = {
    onCreateUser: PropTypes.func.isRequired,
}

export default FormCreateUser