import React, {Component} from "react"
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import User from "./User"
import Pagination from "./Pagination"
import FormCreateUser from "./FormCreateUser"


class ListUsers extends Component {
    state = {
        users: [],
        pagination: {
            page: 1,
            total: 0,
            pages: 0,
            perPage: 3
        }
    }

    componentDidMount() {
        this._fetchUsers()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.pagination.page !== this.state.pagination.page) {
            this._fetchUsers()
        }
    }

    _fetchUsers = () => {
        const {page} = this.state.pagination
        fetch(`https://reqres.in/api/users?page=${page}`)
            .then(response => response.json())
            .then(response => {
                const {data, page, total, total_pages, per_page} = response

                if (data) {
                    this.setState({
                        users: data,
                        pagination: {
                            page: parseInt(page, 10),
                            total: parseInt(total, 10),
                            pages: total_pages,
                            perPage: per_page
                        }
                    })
                }
            })
    }

    _removeUser = (id) => {
        return fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE'
        })
    }


    _handleRemoveUser = (id) => {
        this._removeUser(id)
            .then(() => {
                this.setState(({users, pagination}) => ({
                    users: users.filter(user => user.id !== id),
                    pagination: {
                        ...pagination,
                        total: pagination.total - 1,
                    }
                }))
            })
    }

    _handleChangePage = (page) => {
        this.setState(({pagination}) => ({
            pagination: {
                ...pagination,
                page: parseInt(page, 10)
            }
        }))
    }

    _handleCreateUser = name => {
        return fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                job: 'leader'
            }),
        }).then(response => response.json())
            .then(response => {
                if (response) {
                    this.setState(({users, pagination}) => ({
                        users: [].concat([response], users),
                        pagination: {
                            ...pagination,
                            total: pagination.total + 1
                        }
                    }))
                }
            })
    }

    render() {
        const {users, pagination} = this.state

        return (
            <ScrollView>
                <Text style={styles.title}>{pagination.total} users</Text>

                <FormCreateUser onCreateUser={this._handleCreateUser}/>

                <View style={styles.list}>
                    {
                        users.map(user => {
                            return (
                                <User onRemove={this._handleRemoveUser} key={user.id} user={user}/>
                            )
                        })
                    }
                </View>

                <Pagination onChangePage={this._handleChangePage} {...pagination}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        padding: 10
    },
    list: {
        borderWidth: 1,
        borderColor: '#eee',
        borderStyle: 'solid',
        marginBottom: 20,
        padding: 10,
    }
})

export default ListUsers