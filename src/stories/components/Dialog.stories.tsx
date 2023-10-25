import React, { useState } from "react";

import { Meta } from "@storybook/react";
import { DatePicker } from "../../components/DatePicker";
import XIcon from "../../icons/XIcon.svg?react";
import CaretUpDownIcon from "../../icons/CaretUpDownIcon.svg?react";
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";

export default {
  title: "Components/Dialog",
  component: DatePicker,
} as Meta;

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

export const Default = () => {
  const todayDate = today(getLocalTimeZone());
  const [selectedDate, setSelectedDate] = useState<CalendarDate>(todayDate);
  const daysToSelect = generateLastWeekDates(todayDate, selectedDate);

  return (
    <div style={{ minHeight: 600 }}>
      <dialog open className="dialog">
        <div className="dialog-container">
          <div className="dialog-header">
            <h2 className="title-2 dialog-title">Add Transaction</h2>
            <button className="icon-button">
              <XIcon />
            </button>
          </div>
          <div className="dialog-content" style={{ gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <label className="form-control">
                <span className="form-control-label">Transaction Type</span>
                <div className="select-container">
                  <select className="select">
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                    <option value="transfer">Transfer</option>
                  </select>
                  <div className="select-icon">
                    <CaretUpDownIcon />
                  </div>
                </div>
              </label>
              <label className="form-control">
                <span className="form-control-label">Description</span>
                <input className="input" placeholder="Description" />
              </label>
              <label className="form-control">
                <span className="form-control-label">Date</span>
                <DatePicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  selectList={daysToSelect}
                />
              </label>
              <label className="form-control">
                <span className="form-control-label">Category</span>
                <div className="select-container">
                  <select className="select">
                    <option value="accessories">Accessories</option>
                    <option value="america">America</option>
                    <option value="austria">Austria</option>
                    <option value="food">Food</option>
                    <option value="girlfriend">Girlfriend</option>
                  </select>
                  <div className="select-icon">
                    <CaretUpDownIcon />
                  </div>
                </div>
              </label>
            </div>
            <form method="dialog">
              <button className="button full-width">Save</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
