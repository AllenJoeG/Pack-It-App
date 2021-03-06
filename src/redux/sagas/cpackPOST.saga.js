import { actionChannel, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* currentPackAxiosPost(action) {
  // console.log(action.payload);
  // let packToPort = action.payload;
  try {
    const response = yield axios({
      method: 'POST',
      url: '/api/usercustom',
      data: action.payload
    });
    yield put({type: 'GET_USER_CUSTOM' });
  } catch(error){
    console.log('error POSTing current pack to DB', error);
  }
}

export default function* cpackPOST() {
  yield takeLatest('POST_CURRENT_PACK', currentPackAxiosPost);
}
