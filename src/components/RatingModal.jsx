import React from 'react';
import { MONTHS } from '../utils/helpers.js';
import '../styles/RatingModal.css';

const RatingModal = ({ editingDay, inputValue, onInputChange, onSubmit, onCancel }) => {
  const [, monthStr, dayStr] = editingDay.split('-');
  const month = MONTHS[parseInt(monthStr)];
  const day = dayStr;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Rate your day</h3>
        <p className="modal-date">{month} {day}</p>
        
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="modal-input"
          placeholder="0-10"
          autoFocus
        />
        
        <div className="modal-buttons">
          <button onClick={onSubmit} className="modal-button save-button">
            Save
          </button>
          <button onClick={onCancel} className="modal-button cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;