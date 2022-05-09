export const Months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const WeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const NumberOfDays = (year: number) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
};
