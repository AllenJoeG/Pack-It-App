import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* categorAxiosGET() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/categories'
    })
    yield put({
      type: "SET_CATEGORIES",
      payload: response.data
    });
  } catch(error){
    console.log('error GETting Categories from DB', error);
  }
}

export default function* categorGET() {
  yield takeLatest('GET_CATEGORIES', categorAxiosGET);
}