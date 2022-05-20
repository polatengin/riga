import { FunctionComponent } from "react";

import { GetCalendarMatrix } from "./Utils";

interface CalendarMonthProps {
  month: number;
  year: number;
}

export const CalendarMonth: FunctionComponent<CalendarMonthProps> = (props: CalendarMonthProps) => {

  const month = props.month - 1;

  const matrix = GetCalendarMatrix(month, props.year);

  return (
    <div className="calendar-month grid grid-cols-7 border">
      { matrix.map((row, rowIndex) => {
        return row.map((item, colIndex) => {
          return (
            <div className="border-t border-l p-1 h-16 flex content-start" key={`${rowIndex}-${colIndex}`} style={{ color: colIndex === 0 ? '#a00' : '#000' }}>
              {item}
            </div>
          );
        });
      }) }
    </div>
  );

};
