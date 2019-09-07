import {
  POST_GROCERY_REQUEST_SUCCESS,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE,
  postGroceryRequestSuccess,
  clearForm,
  getGroceriesRequestSuccess,
  handleNameChange
} from '../../../app/javaScript/src/modules/groceries'

describe('postGroceryRequestSuccess action', ()=>{
  it('Should create an ADD_NEW_GROCERY', ()=>{
    const grocery = {id: 1, name: "bananas"}
    const action = postGroceryRequestSuccess(grocery)
    expect(action).toEqual({
      type: 'POST_GROCERY_REQUEST_SUCCESS',
      grocery
    })
  })
})

describe('clearForm action create',()=>{
  it("should return just the action type for CLEAR_FORM action",()=>{
    const action = clearForm()
    expect(action).toEqual({
      type: CLEAR_FORM
    })
  })
})

describe('getGroceriesRequestSuccess action', () => {
  it('should create an GET_GROCERIES_REQUEST_SUCCESS action',()=>{
    const newGroceries = [{ id: 1, name: 'bananas' }, { id: 2, name: 'oranges' }]
    const action = getGroceriesRequestSuccess(newGroceries)
    expect(action).toEqual({
      type: GET_GROCERIES_REQUEST_SUCCESS,
      groceries: newGroceries
    })
  })
})

describe('handleNameChange action', ()=>{
  it("shoudl return the value of the input of HANDLE_NAME_CHANGE", ()=>{
    const event = {target: {value: "orange"} }
    const action = handleNameChange(event)
    expect(action).toEqual({
      type: HANDLE_NAME_CHANGE,
      newName: event.target.value
    })
  })
})
