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
        display: 'flex', // Flexbox 사용
        alignItems: 'center', // 수직 중앙 정렬
        justifyContent: 'center', // 수평 중앙 정렬 (필요시)
        width: '100%',
        backgroundColor: '#FFEB3B', // 잘못된 ## 수정
        textAlign: 'center',
        border: 'none',
        padding: '10px',
        fontSize: '16px',
        marginTop: '60px',
        cursor: 'pointer', // 버튼 클릭 시 커서 변경 (선택 사항)
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
