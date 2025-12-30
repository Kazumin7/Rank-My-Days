import React from 'react';
import { getColor, getDaysInMonth, MONTHS } from '../utils/helpers.js';
import '../styles/MainView.css';

const MainView = ({ ratings, onMonthClick, onCircleClick, onExport, onImport }) => {
  return (
    <div className="main-view">
      <div className="main-container">
        <h1 className="main-title">Rank My Days - 2026</h1>

        <div className="color-key">
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(0) }}></div>
          <span>0</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(1) }}></div>
          <span>1</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(2) }}></div>
          <span>2</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(3) }}></div>
          <span>3</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(4) }}></div>
          <span>4</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(5) }}></div>
          <span>5</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(6) }}></div>
          <span>6</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(7) }}></div>
          <span>7</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(8) }}></div>
          <span>8</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(9) }}></div>
          <span>9</span>
        </div>
        <div className="color-key-item">
          <div className="key-circle" style={{ backgroundColor: getColor(10) }}></div>
          <span>10</span>
        </div>
      </div>
        
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