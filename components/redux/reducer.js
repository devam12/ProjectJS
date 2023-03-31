import { ADD_TO_CART } from "./constant";
const initstate = [];

export const reducer = (state=initstate,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return [...state,action.data];
    
        default:
            return state;
    }

}