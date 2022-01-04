import { actionChannel, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* customGearAxiosDELETE(action) {
  console.log(action.payload);
  
  try {
    const response = yield axios({
      method: 'DELETE',
      url: `/api/usercustom/${action.payload}`
    })
    yield put({type: 'GET_USER_CUSTOM'})
  } catch(error){
    console.log('error deleting usercustom gear from DB', error);
  }
}

export default function* customGearDELETE() {
  yield takeLatest('DELETE_TRIP_GEAR', customGearAxiosDELETE);
}