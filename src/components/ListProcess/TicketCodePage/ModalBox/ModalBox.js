import React from 'react';
import './ModalBox.css';

import { ReactComponent as Close } from '../../../../assets/Close.svg';
const ModalBox = ({ onClickClose }) => {
  return (
    <div className="info-modal-box">
      <div className="modal-container">
        <div>
          <p className="question">๐ข ์๊ธ ํ์ธ ์ฒ๋ฆฌ๊ฐ ์๋ผ์!</p>
          <p className="answer">
            ์ ํฌ๊ฐ ์์๋ก ์๊ธ์ ํ์ธํ๊ณ  ์ง์  ์ฒ๋ฆฌํด๋๋ฆฝ๋๋ค. ์ ์๋ง
            ๊ธฐ๋ค๋ ค์ฃผ์ธ์! <br />
            <br />
            ์ต๋ 24์๊ฐ ์ด๋ด &nbsp;
            <span
              style={{
                padding: '0px 4px 0px 4px',
                backgroundColor: '#363636',
                borderRadius: '5px'
              }}
            >
              ์๊ธ ํ์ธ
            </span>
            <br />
            3์ผ ์ด๋ด ๋ฏธ์๊ธ ์&nbsp;
            <span
              style={{
                padding: '0px 4px 0px 4px',
                backgroundColor: '#363636',
                borderRadius: '5px'
              }}
            >
              ๋ฏธ์๊ธ ์ฒ๋ฆฌ
            </span>
            &nbsp;๋ฉ๋๋ค.
          </p>

          <p className="question" style={{ marginTop: '30px' }}>
            ๐ณ ์๊ธ ์ ์ธ๋ฐ ํฐ์ผ์ด ๋ฐ๊ธ๋์ด์!
          </p>
          <p className="answer">
            ์๊ธ์ด ํ์ธ๋ ํฐ์ผ์ผ๋ก๋ง ์์ฅ ๊ฐ๋ฅํฉ๋๋ค. <br />
            QR์ฝ๋ ์ฃผ๋ณ์ ์ด๋ก์ ํ๋๋ฆฌ๋ก ์๊ธ ํ์ธ ์ฌ๋ถ๋ฅผ ํ์ธํ์ค ์ ์์ด์.
          </p>

          <p className="answer" style={{ marginTop: '30px' }}>
            ๊ธฐํ ๋ฌธ์์ฌํญ์ <br />
            ๊ณ ์ค๋ฝ ์นด์นด์คํก ์ฑ๋์ ์ด์ฉํด์ฃผ์ธ์.
          </p>
        </div>
      </div>
      <div className="modal-bottom">
        <div
          style={{
            height: '1px',
            width: '100%',
            backgroundColor: '#363636'
          }}
        ></div>
        <div className="modal-container">
          <button className="CloseButton" onClick={onClickClose}>
            <span>๋ซ๊ธฐ</span>
            <div className="modal--svg" style={{ marginLeft: '11px' }}>
              <Close />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
