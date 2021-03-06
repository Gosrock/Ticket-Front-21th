import React, { useState, useRef } from 'react';
import {
  ProgressLayout,
  TicketContainer,
  TicketWrapContainer,
  TicketTop,
  GoBackButton
} from 'gosrock-storybook';
import './TicketingDepositPage.css';
import history from '../../../history';
import { useSelector, useDispatch } from 'react-redux';
import { ticketDeposit } from '../../../state/actions-creators';
import TicketingOBDeposit from './TicketingOBDeposit';
import TicketingNewbieDeposit from './TicketingNewbieDeposit';

const KAKAO_ID = 'FZu93vV2t';

function TicketingDepositPage({ ...props }) {
  const studentID = useSelector(state => state.ticketStudentInfo.studentID);
  const newbie = useSelector(state => state.ticketStudentInfo.newbie);
  // console.log(studentID, smallGroup);

  const [accountName, setAccountName] = useState('');
  const [smallGroup, setSmallGroup] = useState(false);

  const modalRef = useRef();
  // 새내기용 스몰 구룹ㅅ
  const smallGroupRef = useRef();
  const dispatch = useDispatch();

  const gobackButtonHandler = () => {
    history.push('/ticketing/amount');
  };

  const accountNameInputHandler = e => {
    setAccountName(e.target.value);
  };

  // OB 용
  const frontButtonHandler = () => {
    if (accountName.length < 2)
      alert('입금자명을 두글자 이상으로 입력해주세요.');
    else modalRef.current.classList.remove('hidden');
  };
  // OB 용
  const purchaseButtonHandler = () => {
    //console.log('purchase');
    dispatch(ticketDeposit({ studentID, smallGroup, accountName }));
  };
  // OB 용
  const kakaoClickButtonHandler = () => {
    const url = `https://qr.kakaopay.com/${KAKAO_ID}${toHexValue(3000)}`;
    openInNewTab(url);
  };

  // newbie 용
  const toggleButtonHandler = () => {
    if (!smallGroup) setSmallGroup(true);
    else setSmallGroup(false);
  };
  // newbie 용
  const closeButtonHandler = () => {
    smallGroupRef.current.classList.add('hidden');
  };

  return (
    <TicketWrapContainer {...props}>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton onClick={gobackButtonHandler}></GoBackButton>
          </TicketTop>
        }
      >
        <ProgressLayout>
          {newbie === false ? (
            <TicketingOBDeposit
              modalRef={modalRef}
              accountName={accountName}
              frontButtonHandler={frontButtonHandler}
              accountNameInputHandler={accountNameInputHandler}
              purchaseButtonHandler={purchaseButtonHandler}
              kakaoClickButtonHandler={kakaoClickButtonHandler}
            />
          ) : (
            <TicketingNewbieDeposit
              smallGroup={smallGroup}
              smallGroupRef={smallGroupRef}
              modalRef={modalRef}
              accountName={accountName}
              frontButtonHandler={frontButtonHandler}
              purchaseButtonHandler={purchaseButtonHandler}
              accountNameInputHandler={accountNameInputHandler}
              toggleButtonHandler={toggleButtonHandler}
              closeButtonHandler={closeButtonHandler}
            ></TicketingNewbieDeposit>
          )}
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketingDepositPage;

const toHexValue = value => {
  return (parseInt(value) * 524288).toString(16);
};

const openInNewTab = url => {
  const newWindow = window.open(url);

  setTimeout(() => {
    return newWindow.close();
  }, 3000);
};
