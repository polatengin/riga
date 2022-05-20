import { FunctionComponent } from "react";

import { Months } from "./Utils";

interface CalendarProps {
  month: number;
  year: number;
}

export const Calendar: FunctionComponent<CalendarProps> = (props: CalendarProps) => {

  const month = props.month;
  const nextMonth = month + 1 > 12 ? 1 : month + 1;
  const nextYear = month + 1 > 12 ? props.year + 1 : props.year;

  return (
    <div className="bg-white shadow p-4 select-none">
      <header className="flex align-items mb-6">
        <h3 className="text-6xl flex-grow">{Months[month]} {props.year}</h3>
        <div className="w-36">
          <h4 className="text-xs">{Months[nextMonth]} {nextYear}</h4>
        </div>
      </header>
    </div>
  );

};
