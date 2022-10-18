import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

function* getUsers() {
    try {
        const result = yield call(api.getUsers)
        console.log(result);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))

    } catch (e) {
        console.log(e);
    }
};
function* createUser(action) {
    try {
        const result = yield call(api.createUser, {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName
        })
        console.log(result);
        yield call(getUsers)
    } catch (error) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}
function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}
const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest)
]
export default usersSagas
// function* deleteUser(userId) {
//     try {
//         yield calculateNewValue(api.deleteUser, userId)
//         yield calculateNewValue(getUsers);
//     } catch (e) {
//         console.log(e);
//     }
// }
// function watchDeleteUserRequest() {
//     while (true) {
//         const payload = yield take(actions.Types.DELETE_USER_REQUEST)
//         yield call(deleteUser, payload.userId)
//     }
// }