import { FunctionComponent } from "react";

interface CalendarMonthProps {
  month: number;
  year: number;
}

export const CalendarMonth: FunctionComponent<CalendarMonthProps> = (props: CalendarMonthProps) => {

  const month = props.month - 1;
  return (
    <div className="calendar-month grid grid-cols-7 border">
    </div>
  );

};
