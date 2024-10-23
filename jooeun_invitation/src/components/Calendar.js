import React from 'react';
import '../styles/Calendar.css';
import heartIcon from '../svg/heart.svg';

const Calendar = () => {
  const weddingDate = new Date('2024-12-28T11:00:00+09:00'); // KST 시간 기준
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
          <>
            <div key={i} className="calendar-cell wedding-day">
              <span>{i}</span>
            </div>
          </>
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

  return (
    <div className="calendar-container">
      <div className='date'>
        <h3>{`2024년 12월 28일`}</h3>
        <h3>{`토요일 오전 11시`}</h3>
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
        <p>
          성균 <img src={heartIcon} alt="heart" style={{ width: '16px', height: '16px' }} /> 주은의 결혼식이 <span style={{ color: '#D08C95', fontWeight: 'bold' }}> {daysLeft}</span>일 남았습니다.
        </p>
      </div>
    </div>
  );
};

export default Calendar;
