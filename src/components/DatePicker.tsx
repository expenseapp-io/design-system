import React, { ChangeEvent, SyntheticEvent, useRef } from "react";
import { CaptionProps, DayPicker, useNavigation } from "react-day-picker";
import { CalendarIcon, CaretLeftIcon, CaretRightIcon } from "../icons";

interface CustomCaptionProps extends CaptionProps {
  formatCaption: (date: Date) => string;
}

function CustomCaption(props: CustomCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

  return (
    <header className="date-picker-caption">
      <button
        type="button"
        disabled={!previousMonth}
        className="icon-button"
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        <CaretLeftIcon />
      </button>
      <span className="date-picker-caption-month">
        {props.formatCaption(props.displayMonth)}
      </span>
      <button
        type="button"
        disabled={!nextMonth}
        className="icon-button"
        onClick={() => nextMonth && goToMonth(nextMonth)}
      >
        <CaretRightIcon />
      </button>
    </header>
  );
}

interface DatePickerProps {
  selectValue: string;
  datePickerValue: Date;
  onChange: (newDate: Date) => void;
  daysToSelect: {
    value: string;
    label: string;
  }[];
  withNativePicker?: boolean;
  formatCaption: (date: Date) => string;
  cancelCopy?: string;
}

function DatePicker(props: DatePickerProps) {
  const { selectValue, datePickerValue, onChange, daysToSelect } = props;
  const ref = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function openDatePicker() {
    ref.current?.showModal();
  }

  function closeDatePicker() {
    ref.current?.close();
  }

  function handleCloseDatePicker(
    event: SyntheticEvent<HTMLDialogElement, Event>
  ) {
    event.stopPropagation();
    closeDatePicker();
  }

  function updateDate(newDate?: Date) {
    if (newDate) {
      onChange(newDate);
      ref.current?.close();
    }
  }

  function openNativeDatePicker() {
    inputRef.current?.click();
  }

  function handleNativeDateChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget.value) {
      const newDate = new Date(event.currentTarget.value);
      onChange(newDate);
    }
  }

  const footer = (
    <div className="date-picker-footer">
      <button type="button" className="button" onClick={closeDatePicker}>
        {props.cancelCopy || "Cancel"}
      </button>
    </div>
  );

  return (
    <>
      <div className="date-picker-container">
        <select
          className="select date-picker-select"
          value={selectValue}
          onChange={(event) => {
            const newDate = new Date(event.currentTarget.value);
            onChange(newDate);
          }}
        >
          {daysToSelect.map((dayOption) => (
            <option key={dayOption.value} value={dayOption.value}>
              {dayOption.label}
            </option>
          ))}
        </select>
        <div className="date-picker-button-container">
          {/* TODO: this native input is not keyboard friendly on small screen sizes on desktop */}
          {props.withNativePicker ? (
            <button
              type="button"
              className="date-picker-button date-picker-mobile-button-container"
              onClick={openNativeDatePicker}
            >
              <CalendarIcon />
              <input
                ref={inputRef}
                className="date-picker-mobile-input"
                type="date"
                onChange={handleNativeDateChange}
              />
            </button>
          ) : (
            <button
              type="button"
              onClick={openDatePicker}
              className="date-picker-button"
            >
              <CalendarIcon />
            </button>
          )}
        </div>
      </div>

      <dialog ref={ref} className="date-picker" onClose={handleCloseDatePicker}>
        <DayPicker
          mode="single"
          showOutsideDays
          required
          selected={datePickerValue}
          onSelect={updateDate}
          weekStartsOn={1}
          components={{
            Caption: (captionProps) => (
              <CustomCaption
                {...captionProps}
                formatCaption={props.formatCaption}
              />
            ),
          }}
          footer={footer}
        />
      </dialog>
    </>
  );
}

export { DatePicker };
