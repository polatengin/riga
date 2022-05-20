import { FunctionComponent } from "react";

interface CalendarProps {
  month: number;
  year: number;
}

export const Calendar: FunctionComponent<CalendarProps> = (props: CalendarProps) => {

  return (
    <div className="bg-white shadow p-4 select-none">
    </div>
  );

};
