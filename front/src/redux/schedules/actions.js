export const SCHEDULE_ADD_ITEM = 'SCHEDULE_ADD_ITEM';
export const SCHEDULES_FETCH_ITEM = 'SCHEDULES_FETCH_ITEM';
export const SCHEDULES_SET_LOADING = 'SCHEDULES_SET_LOADING';
export const SCHEDULES_DELETE_ITEM = 'SCHEDULES_DELETE_ITEM';

export const schedulesAddItem = (payload) => ({
  type: SCHEDULE_ADD_ITEM,
  payload
});

export const schedulesFetchItem = (payload) => ({
  type: SCHEDULES_FETCH_ITEM,
  payload // [{}, {}, {}, ...]
});

export const schedulesSetLoading = (payload) => ({
  type: SCHEDULES_SET_LOADING
});

export const schedulesDeleteItem = (payload) => ({
  type: SCHEDULES_DELETE_ITEM,
  payload
});
