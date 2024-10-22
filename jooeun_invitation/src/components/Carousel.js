// src/components/Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import '../styles/Carousel.css';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const navigate = useNavigate();
  const galleryImages = Array.from({ length: 37 }, (_, i) => `/assets/picture/weddingPic_${i + 1}.jpg`);

  const handleImageClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="carousel-container">
      {/* 메인 캐러셀 */}
      <Swiper
        modules={[Autoplay, Thumbs]}
        spaceBetween={10}
        slidesPerView={1.7}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper mainSwiper"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={image}
                alt={`Wedding Pic ${index + 1}`}
                className="carousel-image"
                onClick={handleImageClick} // 갤러리 페이지로 이동
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
