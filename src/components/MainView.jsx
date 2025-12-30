import React from 'react';
import { getColor, getDaysInMonth, MONTHS } from '../utils/helpers.js';
import '../styles/MainView.css';

const MainView = ({ ratings, onMonthClick, onCircleClick, onExport, onImport }) => {
  return (
    <div className="main-view">
      <div className="main-container">
        <h1 className="main-title">Rank My Days - 2026</h1>
        
        <div className="calendar-grid">
          {MONTHS.map((month, monthIndex) => (
            <div key={month} className="month-column">
              <button
                onClick={() => onMonthClick(monthIndex)}
                className="month-label"
              >
                {month.slice(0, 3)}
              </button>
              
              <div className="days-container">
                {Array.from({ length: getDaysInMonth(monthIndex, 2026) }, (_, day) => {
                  const key = `2026-${monthIndex}-${day + 1}`;
                  const rating = ratings[key];
                  
                  return (
                    <button
                      key={day}
                      onClick={() => onCircleClick(monthIndex, day + 1)}
                      className="day-circle"
                      style={{ backgroundColor: getColor(rating) }}
                      title={`${month} ${day + 1}${rating !== undefined ? `: ${rating}` : ''}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainView;