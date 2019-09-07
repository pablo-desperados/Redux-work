import {
  groceries,
 initialState,
 POST_GROCERY_REQUEST_SUCCESS,
 CLEAR_FORM,
 GET_GROCERIES_REQUEST_SUCCESS,
 HANDLE_NAME_CHANGE
} from '../../../app/javascript/src/modules/groceries'


describe("groceries reducer", ()=>{
  it("default case: should return the initial state", ()=>{
    const newState = groceries(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it("POST_GROCERY_REQUEST_SUCCESS case: add a new grocery to state", ()=>{
    const grocery = {id: 1, name: "orange"}
    const action = {type: POST_GROCERY_REQUEST_SUCCESS, grocery}
    const newState = groceries(initialState, action)
    expect(newState.groceryList[0]).toEqual(grocery)
  })

  it('GET_GROCERIES_REQUEST_SUCCESS case: updates the grocery list when the action type is received', () => {
    const newGroceries = [{ id: 1, name: 'bananas' }, {id: 2, name: 'oranges'}]
    const action = { type: GET_GROCERIES_REQUEST_SUCCESS, groceries: newGroceries }
    const newState = groceries(initialState, action)

    expect(newState.groceryList).toEqual(newGroceries)
  })

  it('CLEAR_FORM case: should clear the name state', ()=>{
    const stateWithName = {
      groceryList: [],
      name: 'bread',
      isFetching: false
    }
    const action = {type: CLEAR_FORM}
    const newState = groceries(stateWithName, action)
    expect(newState.name).toEqual("")
  })
})
