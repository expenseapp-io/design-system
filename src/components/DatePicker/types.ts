
export interface DatePickerState {
  isOpen: boolean
}

export enum DatePickerActionType {
  Open = "Open",
  Close = "Close"
}

export type DatePickerAction = {
  type: DatePickerActionType
};
