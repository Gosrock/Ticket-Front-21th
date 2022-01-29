import { combineReducers } from 'redux';
import auth from './auth';
import messageSend from './messageSend';
// 가져올때 확인하는 부분..! mapStateToProps
export default combineReducers({
  auth: auth,
  messageSend: messageSend
});