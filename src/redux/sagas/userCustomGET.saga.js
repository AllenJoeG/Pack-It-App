import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* userCustomAxiosGET() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/usercustom'
    })
    yield put({
      type: "SET_USER_CUSTOM",
      payload: response.data
    });
  } catch(error){
    console.log('error GETting usercustom from DB', error);
  }
}

export default function* userCustomGET() {
  yield takeLatest('GET_USER_CUSTOM', userCustomAxiosGET);
}