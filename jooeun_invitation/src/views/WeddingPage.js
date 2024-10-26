// WeddingPage.js
import React, { useState, useRef, useEffect } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "../styles/WeddingPage.css";
import KakaoMap from "../components/KakaoMap.js";
import copy from "../svg/copy.svg";
import play from "../svg/play.svg";
import pause from "../svg/pause.svg";
import Carousel from "../components/Carousel.js";
import Account from "../components/Account.js";
import Calendar from "../components/Calendar.js";
import { useNavigate } from 'react-router-dom';
import {
  ADDRESS
} from '../config.js';

const WeddingPage = () => {
  const navigate = useNavigate();
  
  // 오디오 제어를 위한 참조
  const audioRef = useRef(null);
  
  // 재생 상태 관리 (초기값을 false로 설정)
  const [isPlaying, setIsPlaying] = useState(false); // 기본적으로 정지 상태

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("오디오 재생 실패:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // 스크롤을 위한 섹션 참조 생성
  const invitationRef = useRef(null);
  const storyRef = useRef(null);
  const calendarRef = useRef(null);
  const galleryRef = useRef(null);
  const locationRef = useRef(null);
  const informationRef = useRef(null);

  // 오프셋 값 설정 (Navbar 높이만큼 오프셋)
  const offset = 40; // Navbar 높이 + 약간의 여유 (픽셀 단위)

  // 재사용 가능한 스크롤 함수
  const scrollToSection = (ref) => {
    const element = ref.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // 스크롤 함수들
  const scrollToInvitation = () => scrollToSection(invitationRef);
  const scrollToStory = () => scrollToSection(storyRef);
  const scrollToCalendar = () => scrollToSection(calendarRef);
  const scrollToGallery = () => scrollToSection(galleryRef);
  const scrollToLocation = () => scrollToSection(locationRef);
  const scrollToInformation = () => scrollToSection(informationRef);

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

  // 토글 함수
  const toggleStory = () => {
    setIsStoryVisible(!isStoryVisible);
  };

  const handleImageClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="body">
      {/* 고정 Navbar */}
      <nav className="fixed-navbar">
        {/* 왼쪽: 오디오 재생/정지 버튼 */}
        <div className="navbar-left">
          <button className="play-pause-button" onClick={togglePlayPause}>
            {isPlaying ? (
              <img src={pause} alt="정지" style={{ width: '20px' }} />
            ) : (
              <img src={play} alt="재생" style={{ width: '20px' }} />
            )}
          </button>
        </div>

        {/* 오른쪽: 네비게이션 버튼 */}
        <div className="navbar-right">
          <button className="nav-button" onClick={scrollToStory}>스토리</button>
          <span className="separator">|</span>
          <button className="nav-button" onClick={scrollToCalendar}>달력</button>
          <span className="separator">|</span>
          <button className="nav-button" onClick={scrollToGallery}>갤러리</button>
          <span className="separator">|</span>
          <button className="nav-button" onClick={scrollToLocation}>위치</button>
          <span className="separator">|</span>
          <button className="nav-button" onClick={scrollToInformation}>안내</button>
        </div>
      </nav>

      {/* 오디오 요소 */}
      <audio ref={audioRef} loop>
        <source src="../../assets/music/Loverboy_cut.mp3" type="audio/mp3" />
      </audio>

      <div className="body-top">
        <img src="../../assets/picture/weddingPic_1.jpg" alt="wedding" />
      </div>

      <div className="body-middle" ref={invitationRef}>
        <div className="section-title">
          <h1>Invitation</h1>
        </div>
        <div className="main-word">
          <h4>안성균ㆍ김주은</h4>
          <div className="location">
            <h4>2024. 12. 28 토요일 오전 11시</h4>
            <h4>충북 진천 울림교회 예배당</h4>
          </div>
          <br />
          <p>
            문과감성충만 이과생과 <br />
            이과감성가득 문과생이 <br />
            사랑이라는 통역을 통해
            <br />
            하나됨을 이루려고합니다
            <br />
            축복으로 함께해주세요
          </p>
        </div>
      </div>

      {/* 스토리 섹션 */}
      <div className="our-story-section" ref={storyRef}>
        <div className="section-title">
          <h1>Our Story</h1>
        </div>
        <img
          className="our-story1-img"
          src="../../assets/picture/weddingPic_2.jpg"
          alt="story1"
        />

        <div className="our-story">
          {/* <h1>우리의 시작</h1> */}
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
          src="../../assets/picture/storyPic_1.jpg"
          alt="story2"
        />

        <div className="our-story">
          {/* <h1>우리의 약속</h1> */}
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
          src="../../assets/picture/weddingPic_18.jpg"
          alt="story3"
        />

        <div className="our-story">
          {/* <h1>우리가 경험한 하나님의 도우심</h1> */}
          <p>
            결혼을 준비하며<br />
            쉬운 것이 하나도 없었지만<br />
            우리는 그럴때마다<br />
            하나님 앞에서 기도하고<br />
            끊임없이 도움을 구했습니다<br />
            그리고 그것 자체가 감사였고<br />
            기쁨이었습니다 <br />
            그러자 신기하게도 모든 일이<br />
            순조롭게 진행되었습니다<br />
            어렵게만 느껴졌던 문제들이<br />
            하나씩 해결되는 것을 경험하며<br />
            우리는 매 순간<br />
            하나님의 섭리하심을 경험했습니다
          </p>
        </div>

        <img
          className="our-story4-img"
          src="../../assets/picture/storyPic_2.jpg"
          alt="story4"
        />

        <div className="our-story">
          {/* <h1>우리의 미래</h1> */}
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
          src="../../assets/picture/storyPic_3.jpg"
          alt="story5"
        />

        <div className="our-story">
          {/* <h1>우리의 매일</h1> */}
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
      </div>

      {/* 달력 섹션 */}
      <div className="section-title" ref={calendarRef}>
        <h1>Calendar</h1>
      </div>
      <Calendar />

      {/* 갤러리 섹션 */}
      <div className="section-title" ref={galleryRef}>
        <h1>Gallery</h1>
      </div>
      <Carousel />

      {/* 지도 부분 */}
      <div className="section-title" ref={locationRef}>
        <h1>Location</h1>
      </div>
      <KakaoMap />
      <div className="address">
        <h4>울림교회 예배당</h4>
        <h4>충북 진천군 용석로 184</h4>
      </div>
      <CopyToClipboard 
        text={ADDRESS} 
      >
        <button className="button">
          <img src={copy} alt="icon" style={{ width: '14px', marginRight: '5px' }} />
          주소 복사
        </button>
      </CopyToClipboard>

      {/* 마음 전하실 곳 섹션 */}
      <div className="account-Box" ref={informationRef}>
        <div className="section-title">
          <h1>Information</h1>
        </div>
        <div className="info-title">
          마음 전하실 곳
        </div>
        <div className="info-text">
          <p>참석이 어려우신 분들을 위해 기재하였습니다.</p>
          <p>너그러이 양해부탁드립니다.</p>
        </div>
      </div>
      <Account />
    </div>
  );
};

export default WeddingPage;
