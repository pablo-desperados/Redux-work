import React from 'react'

import GroceryPageContainer from '../containers/GroceryPageContainer'
import {Provider} from 'react-redux'

const App = (props) => {
  return (
  <Provider store={props.store}>
      <div>
        <GroceryPageContainer />
      </div>
  </Provider>
  )
};

export default App
