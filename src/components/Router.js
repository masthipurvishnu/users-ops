
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home'
import UsersList from './UsersList'
import NewUserForm from './NewUserForm'
import Users from './Users'

const RouterComponent = ({ users }) => {
    return (
        <Router>
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
                            <Users />
                            {/* <NewUserForm onSubmit={this.handleSubmit}></NewUserForm>
                            <UsersList users={users.items}></UsersList> */}
                        </>
                    } />
                    <Route exact path='/other' element={
                        <>Others
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    )
}
export default RouterComponent