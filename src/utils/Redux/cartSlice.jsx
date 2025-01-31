import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items: []
    },
    reducers : {
        addItems : (state, action) => {
            // mutatibg the state here
            state.items.push(action.payload);
        },
        removeItems : (state) => {
          
            state.items.pop();
        },
        clearCart : (state) => {
            // console.log("state",  current(state));
            // state.items.length = 0;
           
            // RTK - either Mutate the existing state or return a new State
            
            return {items : []}; // this new [] will be replaced inside originalState = [  ]
        }
    }


})

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;