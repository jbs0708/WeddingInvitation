// index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles/WeddingPage.css";
import WeddingPage from './views/WeddingPage.js';
import Carousel from './components/Carousel.js';
import ImageModal from './components/ImageModal.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// React Modal의 접근성을 위해 App 요소를 모달에 바인딩
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Root = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryImages = Array.from({ length: 50 }, (_, i) => `/assets/picture/weddingPic_${i + 1}.jpg`);

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

  return (
    <div>
      <WeddingPage />
      {/* <Carousel openModal={openModal} /> */}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageSrc={currentImage}
        galleryImages={galleryImages}
        currentIndex={currentIndex}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
