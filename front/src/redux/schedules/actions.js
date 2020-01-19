// constants
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";
export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM";
export const SCHEDULES_SET_LOADING = "SCHEDULES_SET_LOADING";
export const SCHEDULES_DELETE_ITEM = "SCHEDULES_DELETE_ITEM";
export const SCHEDULES_ASYNC_FAILURE = "SCHEDULES_ASYNC_FAILURE";
export const SCHEDULES_RESET_ERROR = "SCHEDULES_RESET_ERROR";

// actions
export const schedulesAddItem = payload => ({
  type: SCHEDULES_ADD_ITEM,
  payload
});

export const schedulesFetchItem = payload => ({
  type: SCHEDULES_FETCH_ITEM,
  payload
});

export const schedulesSetLoading = () => ({
  type: SCHEDULES_SET_LOADING
});

export const schedulesDeleteItem = payload => ({
  type: SCHEDULES_DELETE_ITEM,
  payload
});

export const schedulesAsyncFailure = error => ({
  type: SCHEDULES_ASYNC_FAILURE,
  error
});

export const schedulesResetError = () => ({
  type: SCHEDULES_RESET_ERROR
});
