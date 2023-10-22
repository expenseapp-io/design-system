import React/*, { useReducer }*/ from "react";
import CalendarIcon from "../../icons/CalendarIcon.svg?react";
// import { initialState, reducer } from "./reducer";
// import { DatePickerActionType } from "./types";
import {
	Button,
	Calendar,
	CalendarCell,
	CalendarGrid,
	// DateInput,
	DatePicker as DatePickerAria,
	// DateSegment,
	Dialog,
	Group,
	Heading,
	// Label,
	Popover} from "react-aria-components";
import CaretLeftIcon from "../../icons/CaretLeftIcon.svg?react";
import CaretRightIcon from "../../icons/CaretRightIcon.svg?react";

function DatePicker() {
	// const [state, dispatch] = useReducer(reducer, initialState);

	// function openDatePicker() {
	// 	dispatch({ type: DatePickerActionType.Open });
	// }

	// function closeDatePicker() {
	// 	dispatch({ type: DatePickerActionType.Close });
	// }

	// function onCalendarButtonClick() {
	// 	if (state.isOpen) {
	// 		closeDatePicker();
	// 	} else {
	// 		openDatePicker();
	// 	}
	// }

	return (
		<div className="date-picker-container">
			<select className="select date-picker-select">
				<option value="today">Today</option>
				<option value="yesterday">Yesterday</option>
				<option value="monday">Monday (Sep 25)</option>
				<option value="sunday">Sunday (Sep 24)</option>
				<option value="saturday">Saturday (Sep 23)</option>
				<option value="friday">Friday (Sep 22)</option>
				<option value="thursday">Thursday (Sep 21)</option>
			</select>
			<div className="date-picker-button-container">
				<DatePickerAria>
					<Group style={{ height: "100%", alignItems: "unset" }}>
						<Button className="date-picker-button">
							<CalendarIcon />
						</Button>
					</Group>
					<Popover>
						<Dialog>
							<Calendar>
								<header>
									<Button className="button" slot="previous">
										<CaretLeftIcon />
									</Button>
									<Heading />
									<Button className="button" slot="next">
										<CaretRightIcon />
									</Button>
								</header>
								<CalendarGrid>
									{(date) => <CalendarCell date={date} />}
								</CalendarGrid>
							</Calendar>
						</Dialog>
					</Popover>
				</DatePickerAria>
			</div>
			{/* <button
				className="date-picker-button"
				// onClick={onCalendarButtonClick}
				popovertarget="mypopover"
				popovertargetaction="show"
			>
				<CalendarIcon />
			</button>
			<dialog id="mypopover" popover="" className="date-picker-popover">
        Hello
				<input />
				<button>Cancel</button>
			</dialog> */}
		</div>
	);
}

export { DatePicker };
