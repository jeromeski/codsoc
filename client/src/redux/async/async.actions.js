import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from "./async.types";


export const asyncActionStart = () => ({
  type: ASYNC_ACTION_START
})

export const asyncActionFinish = () => ({
  type: ASYNC_ACTION_FINISH
})
