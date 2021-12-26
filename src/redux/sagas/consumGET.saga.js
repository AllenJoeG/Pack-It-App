import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* consumAxiosGET() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/consumables'
    })
    yield put({
      type: "SET_CONSUMABLES",
      payload: response.data
    });
  } catch(error){
    console.log('error GETting Consumables from DB', error);
  }
}

export default function* consumGET() {
  yield takeLatest('GET_CONSUMABLES', consumAxiosGET);
}