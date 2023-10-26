import React from "react";

import { Meta } from "@storybook/react";
import { DatePicker } from "../../components/DatePicker";
import { useDatePicker } from "../../utils/useDatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta;

export const Default = () => {
  const datePickerProps = useDatePicker();

  return (
    <div style={{ padding: 40 }}>
      <DatePicker
        value={datePickerProps.selectedDate}
        onChange={datePickerProps.setSelectedDate}
        selectList={datePickerProps.daysToSelect}
      />
    </div>
  );
};
