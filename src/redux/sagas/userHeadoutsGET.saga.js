import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* userHeadoutsAxiosGET() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/headouts'
    })
    yield put({
      type: "SET_USER_TRIPS",
      payload: response.data
    });
  } catch(error){
    console.log('error GETting users headouts from DB', error);
  }
}

export default function* userHeadoutsGET() {
  yield takeLatest('GET_USER_TRIPS', userHeadoutsAxiosGET);
}