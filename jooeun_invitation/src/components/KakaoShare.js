// KakaoShare.js
import React from 'react';
import KakaoIcon from '../icon/kakaotalk.png';

function KakaoShare() {



  const kakoShare = () => {

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('95ebee5e2635d8c256e3a2e4eba24364');
    }

    window.Kakao.Share.sendScrap({
      requestUrl: 'https://jbs0708.github.io',
      templateId: 113582,
    });

  }

  return (
    <button
      onClick={kakoShare}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#f7f7f7',
        border: '1px solid #ccc',
        textAlign: 'center',
        padding: '10px',
        fontSize: '16px',
        marginTop: '60px',
        marginBottom: '20px',
        borderRadius: '10px',
      }}
    >
      <img
        src={KakaoIcon}
        style={{ width: '24px', marginRight: '3px', verticalAlign: 'middle' }}
        alt="Kakao Icon" // 접근성을 위한 alt 속성 추가
      />
      <span>카카오톡 공유하기</span>
    </button>
  )
}

export default KakaoShare;
