// this file is holding two things usually:
// 1) the initial state of the application
// 2) the configureStore function execution

import { createStore } from 'redux'
import mainReducer from '../reducers'

// 1)
export const initialState = {
  // a common practice is to not throw all the properties you need here randomly,
  // but instead to create slices, chunks, subobjects
  cart: {
    products: [],
  },
}

// 2)
const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore

// FUTURE ENHANCERS CAPABILITIES:
// devTools enabling
// enabling redux-thunk
// enable persistency
// enable encryption

// the goal is the same we had on monday: implement the cart functionality
// this cart must be shared and accessible from at least 3 components:
// - Cart
// - CartIndicator
// - BookDetail
