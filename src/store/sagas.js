import { all } from 'redux-saga/effects';


function* mockSaga() {
   console.log('Hello from mock saga');
}


export default function* rootSaga() {
   yield all([
      mockSaga()
   ])
}
