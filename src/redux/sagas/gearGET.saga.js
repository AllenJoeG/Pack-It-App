import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* gearAxiosGET() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/gear'
    })
    yield put({
      type: "SET_INVENTORY",
    });
  } catch(error){
    console.log('error GETting Gear from DB', error);
  }
}

export default function* gearGET() {
  yield takeLatest('GET_GEAR', gearAxiosGET);
}