import { combineReducers } from 'redux';
import auth from './auth';
import messageSend from './messageSend';
import routePagination from './routePagination';
import getTickets from './getTickets';
import ticketStudentInfo from './ticketStudentInfo';
import ticketDeposit from './ticketDeposit';
import getTicket from './getTicket';

window.Kakao.init('8bb6e42c94b8560c4e4cc4ad2d1447f6'); //카카오톡 공유

// 가져올때 확인하는 부분..! mapStateToProps
export default combineReducers({
  auth: auth,
  messageSend: messageSend,
  routePagination: routePagination,
  getTickets: getTickets,
  getTicket: getTicket,
  ticketStudentInfo: ticketStudentInfo,
  ticketDeposit: ticketDeposit
});
