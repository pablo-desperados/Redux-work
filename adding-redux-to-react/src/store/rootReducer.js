import { combineReducers } from 'redux'
import { addNewGrocery, clearForm, groceries, handleNameChange } from '../modules/groceries'

const rootReducer = combineReducers({
  groceries
})

export default rootReducer
