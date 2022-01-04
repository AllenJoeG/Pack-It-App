import { actionChannel, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateGearPUT(action) {
  console.log(action.payload);
  
  try {
    const response = yield axios({
      method: 'PUT',
      url: `/api/usercustom/${action.payload.id}`,
      data: action.payload
    })
    yield put({type: 'GET_USER_CUSTOM'})
  } catch(error){
    console.log('error updating usercustom gear to DB', error);
  }
}

export default function* gearPUT() {
  yield takeLatest('UPDATE_CUSTOM_GEAR', updateGearPUT);
}