import { actionChannel, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* currentPackAxiosPost(action) {
  try {
    const response = yield axios({
      method: 'POST',
      url: '/api/usercustom',
      data: action.payload
    })
  } catch(error){
    console.log('error POSTing current pack to DB', error);
  }
}

export default function* cpackPOST() {
  yield takeLatest('POST_CURRENT_PACK', currentPackAxiosPost);
}