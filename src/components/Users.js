import React from "react";
import { connect } from 'react-redux'
import UsersList from './UsersList'
import NewUserForm from './NewUserForm'

import { getUsersRequest, createUserRequest } from '../actions/users'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.props.getUsersRequest();
    }

    render() {
        const users = this.props.users
        return (
            <>
                <div>Users component</div>
                <NewUserForm onSubmit={this.handleSubmit}></NewUserForm>
                <UsersList users={users.items}></UsersList>
            </>
        )
    }
}
export default connect(({ users }) => ({ users }), {
    getUsersRequest,
    createUserRequest
})(Users); 