import {DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTAL, GET_AMOUNT} from "./actions";

export default function reducer (state, action){
  switch (action.type){
    case CLEAR_CART:
      return {...state, cart:[]};
    case INCREASE:
    const tempCart =  state.cart.map(cartItme => {
      if(cartItme.id === action.payload.id){
        cartItme= {...cartItme, amount: cartItme.amount +1}
      }
      return cartItme
    })
    return {...state, cart:tempCart}
      
    case DECREASE:
     const deCart =  state.cart.map(cartItme => {
       
        if(cartItme.deCartid === action.payload.id){
          cartItme= {...cartItme, amount: cartItme.amount -1}
        }
        return cartItme
      })
      return {...state, cart:deCart}
    case REMOVE:
      return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)}
    default:
      return state; 
  }
   /* if(action.type === DECREASE){
      return {...state, count: state.count -1}
    }
    if(action.type === INCREASE){
      return {...state, count: state.count +1}
    }
    if(action.type === CLEAR_CART){
      return {...state, cart:[]}
    }
    if(action.type === GET_TOTAL){
      return {...state, }
    }
    if(action.type === GET_AMOUNT){
      return {...state, }
    }
    return state;*/
  }

  