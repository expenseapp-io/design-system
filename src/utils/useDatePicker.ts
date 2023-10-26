import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { useState } from "react";

function generateLastWeekDates(
  startFrom: CalendarDate,
  selectedDate: CalendarDate
) {
  const days = [];
  let currentDate = startFrom;
  const formatter = new DateFormatter("en-US", {
    day: "2-digit",
    month: "short",
    weekday: "long",
  });

  for (let i = 0; i < 7; i++) {
    const formattedDate = formatter.format(
      currentDate.toDate(getLocalTimeZone())
    );
    const customLabels = ["Today", "Yesterday"];

    days.push({
      value: currentDate.toString(),
      label: customLabels[i] ? `${customLabels[i]}` : formattedDate,
    });

    currentDate = currentDate.subtract({ days: 1 });
  }

  const doesSelectedDateExists = days.find(
    (day) => day.value === selectedDate.toString()
  );

  if (!doesSelectedDateExists) {
    days.unshift({
      value: selectedDate.toString(),
      label: formatter.format(selectedDate.toDate(getLocalTimeZone())),
    });
  }

  return days;
}

function useDatePicker() {
  const todayDate = today(getLocalTimeZone());
  const [selectedDate, setSelectedDate] = useState<CalendarDate>(todayDate);
  const daysToSelect = generateLastWeekDates(todayDate, selectedDate);

  return {
    selectedDate,
    daysToSelect,
    setSelectedDate,
  };
}

export { useDatePicker };
