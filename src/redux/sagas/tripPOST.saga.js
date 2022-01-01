import { actionChannel, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createTripPost(action) {
  console.log(action.payload);
  
  try {
    const response = yield axios({
      method: 'POST',
      url: '/api/headouts',
      data: action.payload
    })
  } catch(error){
    console.log('error POSTing new trip headout to DB', error);
  }
}

export default function* tripPOST() {
  yield takeLatest('CREATE_TRIP', createTripPost);
}

//Uncertain whether this is NECESSARY!?