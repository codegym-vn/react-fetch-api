import React, {Component} from "react"
import {ScrollView, Text} from 'react-native'
import User from "./User"
import Pagination from "./Pagination"

class ListUsers extends Component {
    state = {
        users: [],
        pagination: {
            page: 1,
            total: 0,
            totalPages: 0
        }
    }

    componentDidMount() {
        this._fetchUsers()
    }

    _fetchUsers = () => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(object => {
                const {data, page, total, totla_pages} = object;

                if (data) {
                    this.setState({
                        users: data,
                        pagination: {
                            page,
                            total,
                            totalPages: totla_pages
                        }
                    })
                }
            })
    }

    _handleRemoveUser = (id) => {
        console.log('remove id', id)
    }

    render() {
        const {users, pagination} = this.state

        return (
            <ScrollView>
                <Text>{pagination.total} users</Text>

                {
                    users.map(user => {
                        return (
                            <User onRemove={this._handleRemoveUser} key={user.id} user={user}/>
                        )
                    })
                }

                <Pagination {...pagination}/>
            </ScrollView>
        )
    }
}

export default ListUsers