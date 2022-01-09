import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addCustomGearAxiosPost(action) {
  try {
    const response = yield axios({
      method: 'POST',
      url: '/api/usercustom/add',
      data: action.payload
    });
    yield put({
      type: 'GET_USER_CUSTOM' 
    });
  } catch(error){
    console.log('error POSTing current pack to DB', error);
  }
}

export default function* addCustomGearPOST() {
  yield takeLatest('POST_CUSTOM_ITEM', addCustomGearAxiosPost);
}
