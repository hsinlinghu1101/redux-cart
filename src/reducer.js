import {DECREASE, INCREASE, CLEAR_CART, GET_TOTAL, GET_AMOUNT} from "./actions";

export default function reducer (state, action){
    console.log({state, action});
    if(action.type === DECREASE){
      return {...state, count: state.count -1}
    }
    if(action.type === INCREASE){
      return {...state, count: state.count +1}
    }
    if(action.type === CLEAR_CART){
      return {...state, count: 0}
    }
    if(action.type === GET_TOTAL){
      return {...state, }
    }
    if(action.type === GET_AMOUNT){
      return {...state, }
    }
    return state;
  }

  