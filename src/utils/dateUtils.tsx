// Helper to get the correct suffix for the day
const getOrdinalSuffix = (day) => {
  if (day >= 11 && day <= 13) return 'th';
  switch (day % 10) {
    case 1:  return 'st';
    case 2:  return 'nd';
    case 3:  return 'rd';
    default: return 'th';
  }
};

// /**
//  * Gets a formatted past date string (e.g., "12th January 2025")
//  * @param {number} months - Months to subtract (default 6)
//  * @returns {string} Formatted date string
//  */
export const getFormattedPastDate = (months = 6) => {
  const date = new Date();
  date.setMonth(date.getMonth() - months);

  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);
  
  // Get full month name (e.g., "January")
  const monthName = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

//   return `${day}${suffix} ${monthName} ${year}`;
    return `${monthName} ${year}`;
};























// // /**
// //  * Calculates a date by subtracting a specified number of months from today.
// //  * @param {number} months - The number of months to subtract (default is 6).
// //  * @returns {Date} The calculated Date object.
// //  */
// export const getPastDateByMonths = (months = 6) => {
//   const date = new Date();
//   date.setMonth(date.getMonth() - months);
//   return date;
// };