import {DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS} from "./actions";

export default function reducer (state, action){
  switch (action.type){
    case CLEAR_CART:
      return {...state, cart:[]};
    case INCREASE:
    let tempCart =  state.cart.map(cartItme => {
      if(cartItme.id === action.payload.id){
        cartItme= {...cartItme, amount: cartItme.amount +1}
      }
      return cartItme
    })
    return {...state, cart:tempCart}
      
    case DECREASE:
     let tempdCart = []
     
        if( action.payload.amount===1){ 
                 
              tempdCart=  state.cart.filter(cartItem => cartItem.id !== action.payload.id)
            }else{
              tempdCart =  state.cart.map(cartItme => {
                if(cartItme.id === action.payload.id){
                  cartItme= {...cartItme, amount: cartItme.amount -1}
                }
                return cartItme
              })
            }
                   
      return {...state, cart:tempdCart};
    case REMOVE:
      return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)}
    case GET_TOTALS:
      let {total, amount}= state.cart.reduce((cartTotal, cartItem)=>{
        const { price, amount} = cartItem;
        const itemTotal = price*amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0
      });
      total = parseFloat(total.toFixed(2));
      return {...state, total, amount}
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

  