// constants
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";

// actions
export const schedulesAddItem = payload => ({
  type: SCHEDULES_ADD_ITEM,
  // payloadにはdialogから作成したschedule.formを渡すことを想定
  payload
});
