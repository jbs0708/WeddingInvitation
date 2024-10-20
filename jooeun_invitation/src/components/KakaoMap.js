import React, { useEffect } from 'react';

const { kakao } = window;


function KakaoMap() {

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(36.899560, 127.523191),
      level: 4
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 위치
    let markerPosition = new kakao.maps.LatLng(
      36.899560,
      127.523191
    );

    // 마커 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커 표시
    marker.setMap(map);
  }, []);
  
  return (
    <div id="map" style={{
      width: '100%',
      height: '500px',
      borderColor: '#949494',
      borderWidth: '1px',
      borderStyle:'solid',
      marginBottom: '20px',
    }}></div>
  )
}

export default KakaoMap;