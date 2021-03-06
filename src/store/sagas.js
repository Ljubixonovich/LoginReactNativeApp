import { call, put, takeLatest } from 'redux-saga/effects';

import startTabBasedApp from '../startTabBasedApp';
import { TRY_AUTH, UI_START_LOADING, UI_STOP_LOADING, AUTH_AUTO_SIGNIN, LOGIN_SUCCESS, LOGIN_FAILED } from './actions';
import { login, verifyToken } from './api';
import { storeToken, getToken, deleteToken } from './asyncStorage';


function* tryLogin(action) {
   try {
      yield put({ type: UI_START_LOADING });
      yield put({ type: LOGIN_SUCCESS });

      const result = yield call(login, action.payload.userName, action.payload.password);

      yield put({ type: UI_STOP_LOADING });
      if (result.token) {
         yield put({ type: LOGIN_SUCCESS });
         storeToken(result.token);
         startTabBasedApp();
      } else {
         yield put({ type: LOGIN_FAILED });
         console.log('LOGIN_FAILED');
      }

   } catch (error) {
      console.log('error');
   }
}

function* checkToken(action) {
   try {
      const storedToken = yield call(getToken);

      if (!storedToken) {
         return;
      }

      const result = yield call(verifyToken, storedToken);
      console.log('result.data.status: ' + result.data.status);

      if (result.data.status === 200) {         
         startTabBasedApp();
      } else {
         deleteToken();
      }
   } catch (error) {
      console.log('error token verify');
   }
}


export default function* rootSaga() {
   yield takeLatest(TRY_AUTH, tryLogin);
   yield takeLatest(AUTH_AUTO_SIGNIN, checkToken);
}
