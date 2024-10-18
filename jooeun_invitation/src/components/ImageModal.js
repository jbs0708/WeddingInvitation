// src/components/ImageModal.js
import React from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom, Autoplay } from 'swiper/modules'; // 필요한 모듈 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import '../styles/ImageModal.css'; // 스타일 경로 확인

const ImageModal = ({ isOpen, onRequestClose, imageSrc, galleryImages, currentIndex }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
      shouldCloseOnOverlayClick={true} // 외부 클릭 시 닫기 활성화
    >
      <button onClick={onRequestClose} className="close-button">&times;</button>
      <Swiper
        modules={[Navigation, Zoom, Autoplay]}
        initialSlide={currentIndex}
        navigation
        zoom
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="modalSwiper"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img src={image} alt={`Wedding Pic ${index + 1}`} className="modal-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Modal>
  );
};

export default ImageModal;
