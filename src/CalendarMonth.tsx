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
    </div>
  );

};
