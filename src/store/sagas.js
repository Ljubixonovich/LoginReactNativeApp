import { call, put, takeLatest } from 'redux-saga/effects';

import { TRY_AUTH, UI_START_LOADING, UI_STOP_LOADING } from './actions';
import { login } from './api';
import startTabs from '../../src/startMainTabs';


function* tryLogin(action) {
   try {
      yield put({ type: UI_START_LOADING });

      const result = yield call(login, action.payload.userName, action.payload.password);
      console.log('result status: ' + result.status);
      console.log('result: ' + JSON.stringify(result));
      yield put({ type: UI_STOP_LOADING });
      if (result.token) {
         console.log('startTabs()');
         //startTabs();
      } else {
         console.log('greska al u try');
      }
      
   } catch (error) {
      console.log('error');
   }

}


export default function* rootSaga() {
   yield takeLatest(TRY_AUTH, tryLogin);
}
