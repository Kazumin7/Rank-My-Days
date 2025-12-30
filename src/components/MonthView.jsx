import React from 'react';
import { getColor, getDaysInMonth, MONTHS } from '../utils/helpers.js';
import '../styles/MonthView.css';

const MonthView = ({ month, ratings, onBack, onCircleClick }) => {
  const daysInMonth = getDaysInMonth(month, 2026);
  
  return (
    <div className="month-view">
      <div className="month-container">
        <button onClick={onBack} className="back-button">
          ← Back to Year View
        </button>
        
        <h2 className="month-title">{MONTHS[month]} 2026</h2>
        
        <div className="month-grid">
          {Array.from({ length: daysInMonth }, (_, day) => {
            const key = `2026-${month}-${day + 1}`;
            const rating = ratings[key];
            
            return (
              <div key={day} className="day-wrapper">
                <button
                  onClick={() => onCircleClick(month, day + 1)}
                  className="day-circle-large"
                  style={{ backgroundColor: getColor(rating) }}
                >
                  {rating !== undefined && (
                    <span className={rating >= 5 ? 'rating-dark' : 'rating-light'}>
                      {rating}
                    </span>
                  )}
                </button>
                <span className="day-number">{day + 1}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthView;