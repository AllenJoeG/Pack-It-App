import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import gearGET from './gearGET.saga';
import consumGET from './consumGET.saga';
import packsGET from './packsGET.saga';
import categorGET from './categorGET.saga';
import cpackPOST from './cpackPOST.saga';
import userCustomGET from './userCustomGET.saga';
import userHeadoutsGET from './userHeadoutsGET.saga';
import tripPUT from './tripPUT.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    gearGET(),
    consumGET(),
    packsGET(),
    categorGET(),
    cpackPOST(),
    userCustomGET(),
    userHeadoutsGET(),
    tripPUT(),
  ]);
}
