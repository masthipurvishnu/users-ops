import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersRequest, createUserRequest } from '../actions/users'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';
import UsersList from './UsersList'
import NewUserForm from './NewUserForm'

import RouterComponent from './Router'
class App extends Component {
  constructor(props) {
    super(props)
    this.props.getUsersRequest();
  }
  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({
      firstName,
      lastName
    })
  }
  render() {
    const users = this.props.users
    return (
      <div style={{ border: '1px solid green', margin: '0 auto', padding: '20px', maxWidth: '900px' }}>
        <RouterComponent users={users} />
        {/* <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">
                  UsersList
                </Link>
              </li>
              <li>
                <Link to="other">
                  Other
                </Link>
              </li>
            </ul>
            <hr />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/users' element={
                <>
                  <NewUserForm onSubmit={this.handleSubmit}></NewUserForm>
                  <UsersList users={users.items}></UsersList>
                </>
              } />
              <Route exact path='/other' element={
                <>Others
                </>
              } />
            </Routes>
          </div>
        </Router> */}
        {/* <NewUserForm onSubmit={this.handleSubmit}></NewUserForm>
        <UsersList users={users.items}></UsersList> */}
      </div>
    )
  }
}
export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest
})(App);

// function App() {
//   return (

//     <div className="App">
//       test
//     </div>
//   );
// }