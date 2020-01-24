// constants
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";
export const SCHEDULES_DELETE_ITEM = "SCHEDULES_DELETE_ITEM";

// actions
export const schedulesAddItem = payload => ({
  type: SCHEDULES_ADD_ITEM,
  payload
});
export const schedulesDeleteItem = payload => ({
  type: SCHEDULES_DELETE_ITEM,
  payload
});
