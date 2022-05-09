export const Months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const WeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const NumberOfDays = (year: number) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
};

export const GetCalendarMatrix = (month: number, year: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const maxDays = NumberOfDays(year)[month];

  const matrix: string[][] = [];
  matrix[0] = WeekDays;

  let counter = 1;
  let row = 1;

  matrix.push([]);
  for (let i = 0; i < firstDay; i++) {
    matrix[row].push("");
    counter++;
  }
  for (let i = 1; i <= maxDays; i++) {
    matrix[row].push(i.toString());
    counter++;
    if (counter > 7) {
      counter = 1;
      row++;
      matrix.push([]);
    }
  }
  const c = matrix[row].length;
  if (c > 0) {
    for (let i = 0; i < 7 - c; i++) {
      matrix[row].push("");
    }
  }

  return matrix;
}
