import C from '../constants';
import { addOrIncrease, toLocalStorage } from '../lib/cart';

export default function (state={}, action={}) {
  switch (action.type) {
    case C.SET_CART:
    return action.payload;

    case C.ADD_TO_CART:
      const {_id, price, title } = action.payload;
      const updatedCart = {
        items:  addOrIncrease(state.items, _id, title, price),
        totalQty: state.totalQty + 1,
        totalPrice: state.totalPrice + price
      };
      toLocalStorage(updatedCart);
    return updatedCart;

    default: return state;
  }
}
