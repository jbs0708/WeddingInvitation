import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "../styles/WeddingPage.css";
import KakaoMap from "../components/KakaoMap.js";
import copy from "../svg/copy.svg";
import Carousel from "../components/Carousel.js";
import Account from "../components/Account.js";
import { useNavigate } from 'react-router-dom';

const WeddingPage = () => {
  const navigate = useNavigate();
  
  // 스토리 표시 상태 관리
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  // 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageSrc, index) => {
    setCurrentImage(imageSrc);
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
    setCurrentIndex(0);
  };

  const address = "충북 진천군 용석로 184";

  // 토글 함수
  const toggleStory = () => {
    setIsStoryVisible(!isStoryVisible);
  };

  const handleImageClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="body">
      <audio autoPlay controls loop>
        <source src="../../assets/music/Loverboy_cut.mp3" type="audio/mp3" />
      </audio>

      <div className="body-top">
        <img src="../../assets/picture/weddingPic_1.jpg" alt="wedding" />
      </div>

      <div className="body-middle">
        <div className="main-word">
          <h1>초대합니다</h1>
          <p>
            문과감성충만 이과생과 <br />
            이과감성가득 문과생이 <br />
            사랑이라는 통역을통해
            <br />
            하나됨을 이루려고합니다
            <br />
            축복으로 함께해주세요
          </p>
        </div>
      </div>

      <div className="body-footer">
        <div className="row2">
          <span className="parents">안경훈</span>
          <span className="bulit">・</span>
          <span className="parents">정명희</span>
          <p>의 장남</p>
          <span className="groom">성균</span>
        </div>

        <div className="row1">
          <span className="parents">김&nbsp;&nbsp;&nbsp;인</span>
          <span className="bulit">・</span>
          <span className="parents">김은진</span>
          <p>의 장녀</p>
          <span className="groom">주은</span>
        </div>
      </div>

      {/* 스토리 토글 버튼 (상단) */}
      <button className="toggle-story-button" onClick={toggleStory}>
        <span>
          {isStoryVisible ? "우리들의 스토리 접기" : "우리들의 스토리 보기"}
        </span>
      </button>

      {isStoryVisible && (
        <div className="our-story-section">
          {/* 스토리 내용 */}
          <img
            className="our-story1-img"
            src="../../assets/picture/weddingPic_2.jpg"
            alt="story1"
          />

          <div className="our-story">
            <h1>우리의 시작</h1>
            <p>
              2022년 더운 여름,<br />
              성균이와 주은이는 만났습니다<br />
              큰 기대없이 나갔던 소개팅에서<br />
              성균이의 순수한 눈빛과 다정한 배려에<br />
              주은이는 알 수 없는 평안과 설렘을 느꼈고<br />
              주은이의 씩씩하고 아름다운 미모에<br />
              성균이는 반해버렸습니다
            </p>
          </div>

          <img
            className="our-story2-img"
            src="../../assets/picture/weddingPic_3.jpg"
            alt="story2"
          />

          <div className="our-story">
            <h1>우리의 약속</h1>
            <p>
              겁이 많아 걱정인 성균이는<br />
              밝고 씩씩한 대장부 같은 주은이에게<br />
              의지할 수 있었고<br />
              성격이 급해 덤벙대는 주은이는<br />
              섬세하고 차분하며 바다 같은 성균이에게<br />
              의지할 수 있었습니다<br />
              우리는 그렇게 서로가 서로에게<br />
              큰 힘이 되어주었고<br />
              각자의 성장을 응원하며<br />
              미래를 함께하기로 약속했습니다<br />
            </p>
          </div>

          <img
            className="our-story3-img"
            src="../../assets/picture/weddingPic_4.jpg"
            alt="story3"
          />

          <div className="our-story">
            <h1>우리가 경험한 하나님의 도우심</h1>
            <p>
              결혼을 준비하며<br />
              쉬운 것이 하나도 없었지만<br />
              우리는 그럴때마다<br />
              하나님 앞에서 기도하고<br />
              끊임없이 도움을 구했습니다<br />
              그리고 그것 자체가 감사였고 기쁨이었습니다<br />
              그러자 신기하게도 모든 일이<br />
              순조롭게 진행되었습니다<br />
              어렵게만 느껴졌던 문제들이<br />
              하나씩 해결되는 것을 경험하며<br />
              우리는 매 순간<br />
              하나님의 섭리하심을 경험했습니다.
            </p>
          </div>

          <img
            className="our-story4-img"
            src="../../assets/picture/weddingPic_5.jpg"
            alt="story4"
          />

          <div className="our-story">
            <h1>우리의 미래</h1>
            <p>
              앞으로도 우리는 가보지 않는 길을<br />
              걸어가야합니다<br />
              하지만 우리는 이제 압니다<br />
              그 길 가운데서 우리의 발걸음을<br />
              견고하게 하시는 분은<br />
              오직 하나님이시며<br />
              모든 것이 감사를 이루는<br />
              과정이 될 것이라는 것을요
            </p>
          </div>

          <img
            className="our-story5-img"
            src="../../assets/picture/weddingPic_6.jpg"
            alt="story5"
          />

          <div className="our-story">
            <h1>우리의 매일</h1>
            <p>
              앞으로, 우리에게 또 어떤 일이 일어날까요?<br />
              한치 앞도 모르는 저희지만,<br />
              그저 함께 시간을 공유하며<br />
              사랑할 기회를 놓치지 않고 살아가고 싶습니다<br />
              성균이와 주은이가 하나님을 늘 기뻐하면서<br />
              하루를, 한달을, 한 해를, 일생을 살아가는<br />
              가정이 되도록 응원해주세요!
            </p>
          </div>

          {/* 스토리 토글 버튼 (하단) */}
          <button className="toggle-story-button" onClick={toggleStory}>
            <span className="line"></span>
            <span className="button-text">
              우리들의 스토리 접기
            </span>
            <span className="line"></span>
          </button>
        </div>
      )}

      {/* 갤러리 */}
      <h1>갤러리 보러가기</h1>
      <Carousel onClick={handleImageClick} />

      {/* 지도 부분 */}
      <div className="date">
        <h1>
          2024. 12. 28
          <br />
          토요일 오전11시 울림교회
        </h1>
      </div>
      <KakaoMap />
      <h3>찾아 오시는 길</h3>
      <CopyToClipboard 
        text={address} 
        onCopy={() => alert('주소가 클립보드에 복사되었습니다!')}
      >
        <button className="addressButton">
          <img src={copy} alt="icon" style={{ width: '20px', marginRight: '8px' }} />
          충북 진천군 용석로 184
        </button>
      </CopyToClipboard>


      {/* 마음 전하실 곳 */}
      <div className="account-Box">
        <span className="line"></span>
        <span className="text">
          마음 전하실 곳
        </span>
        <span className="line"></span>
      </div>
      <Account />
    </div>
  );
};

export default WeddingPage;
