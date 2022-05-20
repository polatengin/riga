import { FunctionComponent } from "react";

interface CalendarMonthProps {
  month: number;
  year: number;
}

export const CalendarMonth: FunctionComponent<CalendarMonthProps> = (props: CalendarMonthProps) => {

  return (
    <div className="calendar-month grid grid-cols-7 border">
    </div>
  );

};
