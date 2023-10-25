import React from "react";
import { CalendarDate, parseDate } from "@internationalized/date";
import CalendarIcon from "../../icons/CalendarIcon.svg?react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DatePicker as DatePickerAria,
  Dialog,
  Group,
  Heading,
  Popover,
} from "react-aria-components";
import CaretLeftIcon from "../../icons/CaretLeftIcon.svg?react";
import CaretRightIcon from "../../icons/CaretRightIcon.svg?react";

interface DatePickerProps {
  value: CalendarDate;
  selectList: { value: string; label: string }[];
  onChange: (value: CalendarDate) => void;
}

function DatePicker(props: DatePickerProps) {
  const { value, onChange, selectList } = props;

  return (
    <div className="date-picker-container">
      <select
        className="select date-picker-select"
        value={value.toString()}
        onChange={(event) => {
          const parsedDate = parseDate(event.currentTarget.value);
          onChange(parsedDate);
        }}
      >
        {selectList.map((dayOption) => (
          <option key={dayOption.value} value={dayOption.value}>
            {dayOption.label}
          </option>
        ))}
      </select>
      <div className="date-picker-button-container">
        <DatePickerAria value={value} onChange={onChange}>
          <Group style={{ height: "100%", alignItems: "unset" }}>
            <Button className="date-picker-button">
              <CalendarIcon />
            </Button>
          </Group>
          <Popover>
            <Dialog>
              <Calendar>
                <header>
                  <Button className="icon-button" slot="previous">
                    <CaretLeftIcon />
                  </Button>
                  <Heading className="text" />
                  <Button className="icon-button" slot="next">
                    <CaretRightIcon />
                  </Button>
                </header>
                <CalendarGrid weekdayStyle="short">
                  {(date) => <CalendarCell date={date} />}
                </CalendarGrid>
              </Calendar>
            </Dialog>
          </Popover>
        </DatePickerAria>
      </div>
    </div>
  );
}

export { DatePicker };
