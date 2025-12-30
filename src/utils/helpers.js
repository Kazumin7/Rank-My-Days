export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getColor = (rating) => {
  if (rating === undefined || rating === null) return '#ffffff';
  if (rating === 0) return '#000000';
  
  const colors = [
    '#000000', // 0 - black
    '#FF0000', // 1 - bright red
    '#FF0000', // 2 - bright red
    '#FF8C00', // 3 - orange
    '#FF8C00', // 4 - orange
    '#FFFF00', // 5 - yellow
    '#FFFF00', // 6 - yellow
    '#9ACD32', // 7 - yellow green
    '#7FFF00', // 8 - chartreuse (brighter green)
    '#00FF00', // 9 - lime green (brightest)
    '#0000FF', // 10 - blue
  ];

  return colors[Math.round(rating)];
};