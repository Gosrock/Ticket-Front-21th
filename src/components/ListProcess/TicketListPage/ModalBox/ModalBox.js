import React from 'react';
import './ModalBox.css';
// { ReactComponent as Close } from '../../../../assets/Close.svg';
import { ReactComponent as Check } from '../../../../assets/Check.svg';
import { ReactComponent as Circle } from '../../../../assets/circle.svg';
import { ReactComponent as Close } from '../../../../assets/arrow-right-circle.svg';

const ModalBox = ({ onClickToggle, onClickClose, somoim }) => {
  return (
    <div className="somoim-modal-box">
      <div className="modal-container modal-top">
        <div>
          <p className="question">π§ κ³΅μ° μ  λ°₯μ½(μλͺ¨μ)μ΄ λ­κ°μ?</p>
          <p className="answer">
            κ³΅μ°μ λ³΄λ¬ μ€κ³  μΆμλ° νΌμλΌμ κ³ λ―Όμ€μ΄μ κ°μ? μ½λ‘λ19λ‘ μΈν΄ μ
            μΉκ΅¬λ₯Ό λ§λκΈ°κ° μ΄λ €μ°μ κ°μ?
            <br />
            <br />
            3μ κ³΅μ°μ μλ΄κΈ° μ¬λ¬λΆμ μν μλ¦¬μμ. μ μ²­μμ νν΄ 4λͺμ© ν
            μ‘°κ° λμ΄ λ°₯μ½μ κ°μ§ μμ μλλ€!
            <br />
            <br />
            κ³΅μ° μ μ λ―Έλ¦¬ μ λ°°μ λκΈ°λ€μ λ§λ  μ μλ κΈ°ν!! μλ‘ λ§λ
            μΉκ΅¬λ€κ³Ό κ³΅μ°μλ μ€μμ μ¬λ°κ² λλ€ κ°μΈμ!!
          </p>

          <p className="question" style={{ marginTop: '30px' }}>
            π§ λ°₯μ½ μΉ΄ν‘λ°©μ μΈμ  λ§λ€μ΄μ§λμ?
          </p>
          <p className="answer">
            3μ 3μΌ μ μ²­ λ§κ° ν 1~2μΌ μ΄λ΄μ κ°λ³μ μΌλ‘ μ°λ½λλ¦΄ μμ μλλ€.
          </p>

          <p className="question" style={{ marginTop: '30px' }}>
            π§ μ μ²­μ νλ€κ° μ·¨μν  μ μλμ?
          </p>
          <p className="answer">
            λ€! λ§μ΄νμ΄μ§μμ νμΈνμ€ μ μμ΅λλ€.
            <br />
            λ€λ§ 3μ 3μΌ μμ κΉμ§ μ§κ³ν κ²°κ³Όλ‘ μ§νλμ€λ κ·Έ μ  μ μν΄μ£Όμλ©΄
            κ°μ¬νκ² μ΅λλ€.
          </p>

          <p className="answer" style={{ marginTop: '30px' }}>
            κΈ°ν λ¬Έμμ¬ν­μ <br />
            κ³ μ€λ½ μΉ΄μΉ΄μ€ν‘ μ±λμ μ΄μ©ν΄μ£ΌμΈμ.
          </p>
        </div>
      </div>

      <div className="modal-bottom">
        <div className="modal-container">
          <button className="CloseButton" onClick={onClickToggle}>
            <span style={{ color: somoim ? 'white' : '#b6b7b8' }}>
              μ μ²­νκΈ°
            </span>
            <div className="modal--svg" style={{ marginLeft: '11px' }}>
              {somoim ? <Check fill="#bf94e4" /> : <Circle fill="#b6b7b8" />}
            </div>
          </button>
        </div>
        <div
          style={{
            height: '1px',
            width: '100%',
            backgroundColor: '#363636'
          }}
        ></div>
        <div className="modal-container">
          <button className="CloseButton" onClick={onClickClose}>
            <span>νμΈ</span>
            <div className="modal--svg" style={{ marginLeft: '11px' }}>
              <Close fill={'white'} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
