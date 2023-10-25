import {
  DatePickerAction,
  DatePickerActionType,
  DatePickerState,
} from "./types";

const initialState: DatePickerState = {
  isOpen: false,
};

function reducer(
  state: DatePickerState,
  action: DatePickerAction
): DatePickerState {
  switch (action.type) {
  case DatePickerActionType.Open: {
    return {
      ...state,
      isOpen: true,
    };
  }
  case DatePickerActionType.Close: {
    return {
      ...state,
      isOpen: false,
    };
  }
  }
}

export { initialState, reducer };
