import C from '../constants';

export default function (state={}, action={}) {
  switch (action.type) {
    case C.SET_CART:
    return action.payload;

    default: return state;
  }
}
