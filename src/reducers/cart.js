import C from '../constants';
import { addOrIncrease, toLocalStorage, decreaseByOne } from '../lib/cart';

export default function (state={}, action={}) {
  switch (action.type) {
    case C.SET_CART:
    return action.payload;

    case C.ADD_TO_CART:
      const {_id, price, title } = action.payload;
      const updateIncreased = {
        items:  addOrIncrease(state.items, _id, title, price),
        totalQty: state.totalQty + 1,
        totalPrice: state.totalPrice + price
      };
      toLocalStorage(updateIncreased);
    return updateIncreased;

    case C.DECREASE_ONE:
      
      const updateDecreased = {
        items:  decreaseByOne(state.items, action.payload._id),
        totalQty: state.totalQty - 1,
        totalPrice: state.totalPrice - action.payload.price
      };
      toLocalStorage(updateDecreased);
    return updateDecreased;

    default: return state;
  }
}
