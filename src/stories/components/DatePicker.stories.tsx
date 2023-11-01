import React, { useState } from "react";

import { Meta } from "@storybook/react";
import { DatePicker } from "../../components/DatePicker";
import { format, parse, sub } from "date-fns";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta;

const valueKeyFormat = "yyyy-LL-dd";
const valueFormat = "MMM d (eeee)";

const parseDate = (date: string): Date => {
  return parse(date, valueKeyFormat, new Date());
};

const formatDate = (date: Date) => {
  return format(date, valueKeyFormat);
};

function generateLastWeekDates(startFrom: Date, selectedDate: Date) {
  const days = [];
  let currentDate = startFrom;

  for (let i = 0; i < 7; i++) {
    const formattedDate = format(currentDate, valueFormat);
    const customLabels = ["Today", "Yesterday"];

    days.push({
      value: formatDate(currentDate),
      label: customLabels[i] ? `${customLabels[i]}` : formattedDate,
    });

    currentDate = sub(currentDate, {
      days: 1,
    });
  }

  const doesSelectedDateExists = days.find(
    (day) => day.value === formatDate(selectedDate)
  );

  if (!doesSelectedDateExists) {
    days.unshift({
      value: formatDate(selectedDate),
      label: format(selectedDate, valueFormat),
    });
  }

  return days;
}

export const Default = () => {
  const [value, setValue] = useState(formatDate(new Date()));

  const daysToSelect = generateLastWeekDates(new Date(), parseDate(value));

  return (
    <div style={{ padding: 40 }}>
      <DatePicker
        selectValue={value}
        datePickerValue={parseDate(value)}
        daysToSelect={daysToSelect}
        onChange={(newDate) => {
          setValue(formatDate(newDate));
        }}
        formatCaption={(date) => format(date, "MMMM, yyy")}
      />
    </div>
  );
};
