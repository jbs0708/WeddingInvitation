// Account.js

import React, { useState } from 'react';
import '../styles/Account.css';
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER
} from '../config.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copyIcon from '../svg/copy.svg'; // 복사 아이콘 경로 확인

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccounts = () => {
    setIsOpen(!isOpen);
  };

  const handleCopy = () => {
    // 사용자에게 피드백을 제공 (토스트 메시지 등으로 개선 가능)
    alert('계좌번호가 클립보드에 복사되었습니다!');
  };

  const handleKakaoPay = () => {
    // 카카오페이 송금 로직을 여기에 추가하세요.
    // 예시: window.open(`https://kakaopay.com/pay?name=${encodeURIComponent(name)}`, '_blank');
    window.open('https://qr.kakaopay.com/FXjb7CHoN');
  };

  return (
    <div className="account-container">
      {/* 계좌번호 확인하기 버튼 */}
      <button className="toggle-button" onClick={toggleAccounts}>
        계좌번호 확인하기
      </button>

      {/* 계좌 정보 섹션 */}
      {isOpen && (
        <div className="accounts-section">
          {/* 신랑측 */}
          <div className="account-item">
            <h3 className="account-header">신랑측</h3>
            <table className="account-table">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>은행 및 계좌번호</th>
                  <th>송금</th>
                </tr>
              </thead>
              <tbody>
                {/* 신랑 */}
                <tr>
                  <td>{GROOM_NAME}</td>
                  <td>
                    <CopyToClipboard text={GROOM_ACCOUNT_NUMBER.split(' ')[1]} onCopy={handleCopy}>
                      <span className="copyable-account">
                        {`${GROOM_ACCOUNT_NUMBER.split(' ')[0]} ${GROOM_ACCOUNT_NUMBER.split(' ')[1]}`}
                        <img src={copyIcon} alt="복사 아이콘" className="copy-icon" />
                      </span>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <button
                      className="kakao-pay-button"
                      onClick={() => handleKakaoPay()}
                    >
                      카카오페이 송금
                    </button>
                  </td>
                </tr>
                {/* 신랑 아버지 */}
                <tr>
                  <td>{GROOM_FATHER_NAME}</td>
                  <td>
                    <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER.split(' ')[1]} onCopy={handleCopy}>
                      <span className="copyable-account">
                        {`${GROOM_FATHER_ACCOUNT_NUMBER.split(' ')[0]} ${GROOM_FATHER_ACCOUNT_NUMBER.split(' ')[1]}`}
                        <img src={copyIcon} alt="복사 아이콘" className="copy-icon" />
                      </span>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <button
                      className="kakao-pay-button"
                      onClick={() => handleKakaoPay(GROOM_FATHER_NAME)}
                    >
                      카카오페이 송금
                    </button>
                  </td>
                </tr>
                {/* 신랑 어머니 */}
                <tr>
                  <td>{GROOM_MOTHER_NAME}</td>
                  <td>
                    <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER.split(' ')[1]} onCopy={handleCopy}>
                      <span className="copyable-account">
                        {`${GROOM_MOTHER_ACCOUNT_NUMBER.split(' ')[0]} ${GROOM_MOTHER_ACCOUNT_NUMBER.split(' ')[1]}`}
                        <img src={copyIcon} alt="복사 아이콘" className="copy-icon" />
                      </span>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <button
                      className="kakao-pay-button"
                      onClick={() => handleKakaoPay(GROOM_MOTHER_NAME)}
                    >
                      카카오페이 송금
                    </button>
                  </td>
                </tr>
                {/* 필요 시 추가 계좌 정보 */}
              </tbody>
            </table>
          </div>

          {/* 신부측 */}
          <div className="account-item">
            <h3 className="account-header">신부측</h3>
            <table className="account-table">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>은행 및 계좌번호</th>
                  <th>송금</th>
                </tr>
              </thead>
              <tbody>
                {/* 신부 */}
                <tr>
                  <td>{BRIDE_NAME}</td>
                  <td>
                    <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER.split(' ')[1]} onCopy={handleCopy}>
                      <span className="copyable-account">
                        {`${BRIDE_ACCOUNT_NUMBER.split(' ')[0]} ${BRIDE_ACCOUNT_NUMBER.split(' ')[1]}`}
                        <img src={copyIcon} alt="복사 아이콘" className="copy-icon" />
                      </span>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <button
                      className="kakao-pay-button"
                      onClick={() => handleKakaoPay(BRIDE_NAME)}
                    >
                      카카오페이 송금
                    </button>
                  </td>
                </tr>
                {/* 신부 아버지 */}
                <tr>
                  <td>{BRIDE_FATHER_NAME}</td>
                  <td>
                    <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER.split(' ')[1]} onCopy={handleCopy}>
                      <span className="copyable-account">
                        {`${BRIDE_FATHER_ACCOUNT_NUMBER.split(' ')[0]} ${BRIDE_FATHER_ACCOUNT_NUMBER.split(' ')[1]}`}
                        <img src={copyIcon} alt="복사 아이콘" className="copy-icon" />
                      </span>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <button
                      className="kakao-pay-button"
                      onClick={() => handleKakaoPay(BRIDE_FATHER_NAME)}
                    >
                      카카오페이 송금
                    </button>
                  </td>
                </tr>
                {/* 신부 어머니 */}
                <tr>
                  <td>{BRIDE_MOTHER_NAME}</td>
                  <td>
                    <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER.split(' ')[1]} onCopy={handleCopy}>
                      <span className="copyable-account">
                        {`${BRIDE_MOTHER_ACCOUNT_NUMBER.split(' ')[0]} ${BRIDE_MOTHER_ACCOUNT_NUMBER.split(' ')[1]}`}
                        <img src={copyIcon} alt="복사 아이콘" className="copy-icon" />
                      </span>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <button
                      className="kakao-pay-button"
                      onClick={() => handleKakaoPay(BRIDE_MOTHER_NAME)}
                    >
                      카카오페이 송금
                    </button>
                  </td>
                </tr>
                {/* 필요 시 추가 계좌 정보 */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
