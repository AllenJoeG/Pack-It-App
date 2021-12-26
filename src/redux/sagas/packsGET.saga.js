import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* packsAxiosGET() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/packs'
    })
    yield put({
      type: "SET_PACKS",
      payload: response.data
    });
  } catch(error){
    console.log('error GETting Packs from DB', error);
  }
}

export default function* packsGET() {
  yield takeLatest('GET_PACKS', packsAxiosGET);
}