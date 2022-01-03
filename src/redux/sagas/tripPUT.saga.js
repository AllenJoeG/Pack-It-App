import { actionChannel, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateTripPUT(action) {
  console.log(action.payload);
  
  try {
    const response = yield axios({
      method: 'PUT',
      url: `/api/headouts/${action.payload.id}`,
      data: action.payload
    })
    yield put({type: 'GET_USER_TRIPS'})
  } catch(error){
    console.log('error updating trip headout to DB', error);
  }
}

export default function* tripPUT() {
  yield takeLatest('UPDATE_TRIP_DETAILS', updateTripPUT);
}
