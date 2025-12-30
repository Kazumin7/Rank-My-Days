import React, { useState, useEffect } from 'react';
import MainView from './MainView';
import MonthView from './MonthView';
import RatingModal from './RatingModal';
import { loadRatings, saveRatings }  from '../utils/storage';
import '../styles/RankMyDays.css';

const RankMyDays = () => {
  const [ratings, setRatings] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [editingDay, setEditingDay] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const load = async () => {
      const savedRatings = await loadRatings();
      if (savedRatings) {
        setRatings(savedRatings);
      }
    };
    load();
  }, []);

  const handleCircleClick = (month, day) => {
    const key = `2026-${month}-${day}`;
    setEditingDay(key);
    setInputValue(ratings[key] !== undefined ? ratings[key].toString() : '');
  };

  const handleSubmit = async () => {
    if (editingDay && inputValue !== '') {
      const value = parseFloat(inputValue);
      if (value >= 0 && value <= 10) {
        const newRatings = { ...ratings, [editingDay]: value };
        setRatings(newRatings);
        await saveRatings(newRatings);
      }
    }
    setEditingDay(null);
    setInputValue('');
  };

  const handleCancel = () => {
    setEditingDay(null);
    setInputValue('');
  };

  return (
    <div className="rank-my-days">
      {selectedMonth === null ? (
        <MainView
          ratings={ratings}
          onMonthClick={setSelectedMonth}
          onCircleClick={handleCircleClick}
        />
      ) : (
        <MonthView
          month={selectedMonth}
          ratings={ratings}
          onBack={() => setSelectedMonth(null)}
          onCircleClick={handleCircleClick}
        />
      )}
      
      {editingDay && (
        <RatingModal
          editingDay={editingDay}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default RankMyDays;