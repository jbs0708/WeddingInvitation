// src/components/Carousel.js
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, FreeMode } from 'swiper/modules'; // 필요한 모듈 임포트
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import '../styles/Carousel.css'; // 스타일 경로 확인

const Carousel = ({ openModal }) => {
  const galleryImages = Array.from({ length: 36 }, (_, i) => `/assets/picture/weddingPic_${i + 1}.jpg`);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbsSwiperRef = useRef(null);

  // 메인 캐러셀이 변경될 때 썸네일을 중앙에 위치시키는 함수
  const handleSlideChange = (swiper) => {
    if (thumbsSwiperRef.current && thumbsSwiperRef.current.slideTo) {
      // 현재 활성 슬라이드 인덱스를 기반으로 썸네일을 중앙에 위치시킴
      const centeredIndex = swiper.realIndex; // loop 모드 사용 시 realIndex 사용
      const slidesPerView = thumbsSwiperRef.current.params.slidesPerView;
      const slidesToScroll = Math.floor(slidesPerView / 2);
      thumbsSwiperRef.current.slideTo(centeredIndex - slidesToScroll);
    }
  };

  return (
    <div className="carousel-container">
      {/* 메인 캐러셀 */}
      <Swiper
        modules={[Autoplay, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper mainSwiper"
        onSlideChange={handleSlideChange} // 슬라이드 변경 시 이벤트 핸들러 추가
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={image}
                alt={`Wedding Pic ${index + 1}`}
                className="carousel-image"
                onClick={() => openModal(image, index)} // 이미지 클릭 시 인덱스 전달
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 썸네일 캐러셀 */}
      <Swiper
        onSwiper={(swiper) => {
          setThumbsSwiper(swiper);
          thumbsSwiperRef.current = swiper;
        }}
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        slidesPerView={'auto'}
        freeMode={true}
        watchSlidesProgress={true}
        centeredSlides={true} // 활성 썸네일을 중앙에 위치시키기 위해 추가
        className="thumbsSwiper"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index} className="thumbnail-slide">
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
