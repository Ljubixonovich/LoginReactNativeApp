import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { TRY_AUTH, UI_START_LOADING, UI_STOP_LOADING } from './actions';
import { login } from './api';
import startTabs from '../../src/startMainTabs';

storeToken = async (token) => {
   try {
      await AsyncStorage.setItem('@token', token)
   } catch (e) {
   }
}

export const getToken = async () => {
   try {
      const value = await AsyncStorage.getItem('@token')
      if (value !== null) {
         console.log('tok: ' + value);
         return value;
      }
   } catch (e) {
   }
}

export const deleteToken = async () => {
   try {
     await AsyncStorage.removeItem('@token')
   } catch(e) {
     // remove error
   } 
   console.log('Token removed.')
 }

function* tryLogin(action) {
   try {
      yield put({ type: UI_START_LOADING });

      const result = yield call(login, action.payload.userName, action.payload.password);

      yield put({ type: UI_STOP_LOADING });
      if (result.token) {
         storeToken(result.token);
         startTabs();
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
