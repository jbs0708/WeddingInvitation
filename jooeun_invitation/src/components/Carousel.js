// src/components/Carousel.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper/modules'; // Swiper에서 직접 모듈 가져오기
import 'swiper/css';
import '../styles/Carousel.css';

const Carousel = () => {
  const galleryImages = Array.from({ length: 18 }, (_, i) => `/assets/picture/weddingPic_${i + 1}.jpg`);

  // 현재 슬라이드 인덱스 관리
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel-container">
      {/* 메인 캐러셀 */}
      <Swiper
        modules={[Autoplay, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        // autoHeight={true}
        className="mySwiper mainSwiper"
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={image}
                alt={`Wedding Pic ${index + 1}`}
                className="carousel-image"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 현재 슬라이드 위치를 나타내는 직사각형 인디케이터 */}
      <div className="carousel-indicators">
        <div className="line-indicator">
          <div
            className="current-indicator"
            style={{
              left: `${(currentIndex / galleryImages.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
