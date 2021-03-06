import React, { useState } from 'react';
import {
  GoFrontButton,
  ProgressLayout,
  TicketContainer,
  TicketBodyHeader,
  TicketBody,
  TicketBottom,
  TicketWrapContainer,
  ProcessTitle,
  ProcessDescription,
  InputForm,
  TicketTop,
  GoBackButton
} from 'gosrock-storybook';
import history from '../../../history';
import { useSelector, useDispatch } from 'react-redux';
import { ticketStudentInfo } from '../../../state/actions-creators';
import './TicketingStudentInfoPage.css';

function TicketingStudentInfoPage({ ...props }) {
  const phoneNumber = useSelector(store => store.auth.phoneNumber);
  const studentIDFromStore = useSelector(
    state => state.ticketStudentInfo.studentID
  );
  const [studentID, setstudentID] = useState(
    studentIDFromStore ? studentIDFromStore : ''
  );
  // const [smallGroup, setSmallGroup] = useState(
  //   useSelector(state => state.ticketStudentInfo.smallGroup)
  // ); //뒤로가기해서 왔을때 유지
  // const smallGroupRef = useRef();

  const dispatch = useDispatch();

  const gobackButtonHandler = () => {
    history.push('/');
  };

  const studentIdInputHandler = e => {
    setstudentID(e.target.value.toUpperCase());
  };

  // const yesButtonHandler = () => {
  //   setSmallGroup(true);
  //   smallGroupRef.current.classList.add('hidden');
  // };

  // const noButtonHandler = () => {
  //   setSmallGroup(false);
  //   smallGroupRef.current.classList.add('hidden');
  // };

  const frontButtonHandler = () => {
    if (studentID.length < 7) return alert('학번을 정확히 입력해주세요.');
    // 학번 검증 부분
    const validateID = new RegExp('^[A-C][0-9]*$');
    if (!validateID.test(studentID))
      return alert('학번을 정확히 입력해주세요.');
    dispatch(ticketStudentInfo({ studentID }));
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
          <TicketBodyHeader>
            <ProcessTitle
              topLabel="안녕하세요,"
              bottomLabel={
                phoneNumber &&
                phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`) +
                  ' 님!'
              }
            />
            <ProcessDescription topLabel="학번을 입력해주세요" />
          </TicketBodyHeader>
          <TicketBody>
            <InputForm
              value={studentID}
              onChange={studentIdInputHandler}
              page="studentId"
            />
            {/* <div
              className="somoim-form"
              onClick={() => {
                smallGroupRef.current.classList.remove('hidden');
              }}
            >
              <div className="somoim-form-content">
                <Check fill={smallGroup ? '#BF94E4' : '#fff'} />
                <span
                  style={{
                    marginLeft: '10px',
                    color: `${smallGroup ? '#fff' : '#b6b7b8'}`
                  }}
                >
                  공연 후 소모임 신청
                </span>
              </div>
              <div className="somoim-form-content">
                <span
                  style={{
                    marginRight: '10px',
                    color: `${smallGroup ? '#b6b7b8' : '#fff'}`
                  }}
                >
                  자세히 보기
                </span>
                <GoFront fill={smallGroup ? '#B6B7B8' : '#fff'} />
              </div>
            </div> */}
          </TicketBody>
          <TicketBottom>
            <GoFrontButton
              onClick={frontButtonHandler}
              label="다음으로"
            ></GoFrontButton>
          </TicketBottom>
          {/* <ModalComponent
            ref={smallGroupRef}
            onClose={() => {
              smallGroupRef.current.classList.add('hidden');
            }}
          >
            <ModalBox
              onClickYes={yesButtonHandler}
              onClickNo={noButtonHandler}
              somoim={smallGroup}
            />
          </ModalComponent> */}
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketingStudentInfoPage;
