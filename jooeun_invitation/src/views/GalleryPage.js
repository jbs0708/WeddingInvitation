// src/pages/GalleryPage.js
import React, { useState } from 'react';
import '../styles/GalleryPage.css';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const GalleryPage = () => {
  const navigate = useNavigate();
  const galleryImages = Array.from({ length: 37 }, (_, i) => `/assets/picture/weddingPic_${i + 1}.jpg`);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="gallery-page">
      {/* 뒤로가기 버튼 */}
      <button className="back-button" onClick={goBack}>
        &#8592; 뒤로가기
      </button>

      {/* 이미지 격자 */}
      <div className="image-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="image-item" onClick={() => openModal(index)}>
            <img src={image} alt={`Wedding Pic ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* 모달 창 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">

          <Swiper
            modules={[Navigation]}
            initialSlide={currentIndex}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            navigation
            allowTouchMove={true}
            className="swiper-container"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Wedding Pic ${index + 1}`} className="modal-image" />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </Modal>
    </div>
  );
};

export default GalleryPage;
