import { takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';

function* squareGet(action){
    console.log('userinfo saga')
    try {
        const squareGet = yield call(axios.get, '/api/square/get');
        console.log(squareGet.data)
        yield put({
            type: 'DISPLAY_HISTORY',
            payload: squareGet.data
        })
    } catch (error) {}
}

function* squarePost(action) {
    console.log('in postSaga')
    try {
        console.log('try')
        console.log('ACTION HERE', action)
        const postTransaction = yield call(axios.post, '/api/square', action.payload);
        console.log('post transaction', postTransaction.data);
        yield put({
            type: 'DISPLAY_TRANSACTIONS',
            payload: postTransaction.data
        })
    } catch (error) {
        console.log('postSaga ERROR', error)
    }
}

function* squareSaga() {
    
    yield takeEvery('GET_TRANSACTIONS', squarePost);
    yield takeEvery('GET_HISTORY', squareGet);
}

export default squareSaga;