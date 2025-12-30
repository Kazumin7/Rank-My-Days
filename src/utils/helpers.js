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
    '#000000', // 0
    '#8B0000', // 1 - dark red
    '#B22222', // 2
    '#DC143C', // 3
    '#FF4500', // 4 - orange red
    '#FF8C00', // 5 - dark orange
    '#FFA500', // 6 - orange
    '#FFD700', // 7 - gold
    '#9ACD32', // 8 - yellow green
    '#32CD32', // 9 - lime green
    '#00FF00', // 10 - bright green
  ];
  
  return colors[Math.round(rating)];
};