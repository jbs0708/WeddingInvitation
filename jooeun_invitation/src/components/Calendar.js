import React from 'react';
import '../styles/Calendar.css';
import heartIcon from '../svg/heart.svg';

const Calendar = () => {
  const weddingDate = new Date('2024-12-28T00:00:00+09:00'); // KST 시간 기준
  const today = new Date();
  const daysLeft = Math.ceil((weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const renderCalendar = () => {
    const calendarDays = [];
    const firstDay = new Date(weddingDate.getFullYear(), weddingDate.getMonth(), 1).getDay();
    const totalDays = new Date(weddingDate.getFullYear(), weddingDate.getMonth() + 1, 0).getDate();

    // Empty cells before the 1st day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-cell empty" />);
    }

    // Fill calendar with the actual days
    for (let i = 1; i <= totalDays; i++) {
      const day = new Date(weddingDate.getFullYear(), weddingDate.getMonth(), i);
      const isSunday = day.getDay() === 0;
      const isSaturday = day.getDay() === 6;
      const isWedding = day.getDate() === weddingDate.getDate();

      if (isWedding) {
        calendarDays.push(
          <div key={i} className="calendar-cell wedding-day">
            <span>{i}</span>
          </div>
        );
      } else {
        calendarDays.push(
          <div
            key={i}
            className={`calendar-cell ${isSunday ? 'sunday' : ''} ${isSaturday ? 'saturday' : ''}`}
          >
            {i}
          </div>
        );
      }
    }

    return calendarDays;
  };

  // 메시지를 조건에 따라 설정
  const renderMessage = () => {
    if (daysLeft > 0) {
      return (
        <>
          성균 <img src={heartIcon} alt="heart" style={{ width: '20px', height: '16px' }} /> 주은의 결혼식이{' '}
          <span style={{ color: '#D08C95', fontWeight: 'bold' }}>{daysLeft}</span>일 남았습니다.
        </>
      );
    } else if (daysLeft === 0) {
      return (
        <>
          🎉 성균 <img src={heartIcon} alt="heart" style={{ width: '20px', height: '16px' }} /> 주은의 결혼식날입니다! 
          결혼을 축하해주세요! 🎉
        </>
      );
    } else {
      const daysSinceWedding = Math.abs(daysLeft);
      return (
        <>
          성균 <img src={heartIcon} alt="heart" style={{ width: '20px', height: '16px' }} /> 주은이
          결혼한지 <span style={{ color: '#D08C95', fontWeight: 'bold' }}>{daysSinceWedding}</span>일째
          입니다.
        </>
      );
    }
  };

  return (
    <div className="calendar-container">
      <div className='date'>
        <p>{`2024년 12월 28일`}</p>
        <p>{`토요일 오전 11시`}</p>
      </div>
      <div className="calendar-header">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day-header ${day === '일' ? 'sunday' : ''} ${
              day === '토' ? 'saturday' : ''
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">{renderCalendar()}</div>
      <div className="d-day">
        <p>{renderMessage()}</p>
      </div>
    </div>
  );
};

export default Calendar;
