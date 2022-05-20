import { FunctionComponent } from "react";

import { Months } from "./Utils";

interface CalendarProps {
  month: number;
  year: number;
}

export const Calendar: FunctionComponent<CalendarProps> = (props: CalendarProps) => {

  const month = props.month;
  return (
    <div className="bg-white shadow p-4 select-none">
    </div>
  );

};
