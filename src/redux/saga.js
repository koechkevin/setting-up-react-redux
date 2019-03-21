import { all, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import toast from 'toastr';

const baseUrl = 'https://koech-back.herokuapp.com/api/v1';
const api = (data) => axios.post(`${baseUrl}/contact`, data);
function* postMessageSaga(action) {
  try {
    yield call(api, action.data);
    toast.success('Your message was sent successfully. Koech will receive an email');
  } catch (error) {
    toast.error('An error occurred while processing your request. please check your entries');
  }
}

function* watchPostMessage() {
  yield takeLatest('POST', postMessageSaga);
}
function* saga() {
  yield all([
    watchPostMessage()
  ]);
}

export default saga;
