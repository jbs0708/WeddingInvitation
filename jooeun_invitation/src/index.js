// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/WeddingPage.css";
import WeddingPage from './views/WeddingPage.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './views/GalleryPage.js';

// React Modal의 접근성을 위해 App 요소를 모달에 바인딩
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<WeddingPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
