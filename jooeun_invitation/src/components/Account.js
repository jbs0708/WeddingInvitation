import React from 'react';
import '../styles/Account.css';
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER
} from '../config.js'

const Account = () => {
  return (
    <div className="account-info">
      <div className="account-item">
        <h3>신랑측</h3>
        <div>
          <p>{GROOM_NAME}</p>
          <p>{GROOM_ACCOUNT_NUMBER}</p>
        </div>
      </div>
      <div className="account-item">
        <h3>신부측</h3>
        <div>
          <p>{BRIDE_NAME}</p>
          <p>{BRIDE_ACCOUNT_NUMBER}</p>
        </div>
      </div>
    </div>
  );
};

export default Account;