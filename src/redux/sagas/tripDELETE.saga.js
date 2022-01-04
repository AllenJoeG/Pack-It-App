import { actionChannel, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* tripAxiosDELETE(action) {
  console.log(action.payload);
  
  try {
    const response = yield axios({
      method: 'DELETE',
      url: `/api/headouts/${action.payload}`
    })
    yield put({type: 'GET_USER_TRIPS'})
  } catch(error){
    console.log('error sending DELETE of trip to DB', error);
  }
}

export default function* tripDELETE() {
  yield takeLatest('DELETE_TRIP_ID', tripAxiosDELETE);
}