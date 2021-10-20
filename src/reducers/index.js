import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, SET_USERNAME } from '../actions'
import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      // this.state.cart.products.push() <-- THIS IS SUPER WRONG
      // BECAUSE PUSH MODIFIES THE ARRAY IN-PLACE
      // YOU DON'T WANT EVER TO MUTATE YOUR ARGUMENTS
      return {
        // the new state must have the same shape as the one we currently have
        // we also have to make super sure that we're not mutating our arguments,
        // because we're in a pure function
        ...state,
        cart: {
          ...state.cart,
          // products: [...state.cart.products, action.payload],
          products: state.cart.products.concat(action.payload),
          // both of these strategies do the same result! choose you favourite :)
        },
      }
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.filter((book, i) => i !== action.payload),
          // products: [...state.cart.products.slice(0, action.payload), ...state.cart.products.slice(action.payload + 1)]
          // both of these strategies do the same result! choose you favourite :)
        },
      }
    }
    case SET_USERNAME: {
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      }
    }
    default:
      return state
  }
}

export default mainReducer

// 1
// 2
// 3
// 4 <- I want to remove this one
// 5

// 1
// 2
// 3
// 5
