import { combineReducers } from 'redux'

import { groceries } from '../modules/groceries'
import { timer, startTimerWithTimeout } from '../modules/timer'

const rootReducer = combineReducers({
  groceries,
  timer
})

export default rootReducer
