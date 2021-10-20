import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
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
          products: [...state.cart.products, action.payload],
        },
      }
    }
    default:
      return state
  }
}

export default mainReducer
