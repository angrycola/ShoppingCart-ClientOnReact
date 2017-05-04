import C from '../constants';

export default function (state=[], action={}) {
  switch (action.type) {
    case C.SET_PRODUCTS:
      return action.payload;
      
    default: return state;
    }
  }
