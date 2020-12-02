// ここではどのaction typeに対してどのような値(payload)を渡すかを定義

// constants
export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

// actions
export const calendarSetMonth = payload => ({
  type: CALENDAR_SET_MONTH,
  payload
});
