import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Button, StyleSheet} from 'react-native'

class Pagination extends Component {
    _handleClickChangePage = (page) => () => {
        this.props.onChangePage(page)
    }

    render() {
        const {pages, page} = this.props

        if (!pages || pages < 1) {
            return null
        }

        const arrButton = []
        for (let i = 1; i <= pages; i++) {
            arrButton.push(
                <Button
                    color={page === i ? 'red' : 'blue'}
                    onPress={this._handleClickChangePage(i)} key={i} title={i + ''}/>
            )
        }

        return (
            <View style={styles.container}>
                {arrButton}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

Pagination.defaultProps = {
    total: 0,
    pages: 0,
    page: 0,
    perPage: 1
}

Pagination.propTypes = {
    total: PropTypes.number,
    page: PropTypes.number,
    pages: PropTypes.number,
    onChangePage: PropTypes.func.isRequired,
}

export default Pagination