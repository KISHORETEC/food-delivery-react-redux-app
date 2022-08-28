import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,

  reducers: {
    addItem(state, action) {
      // Take data from action
      const newItem = action.payload;
      //Filtered new data in the initial state
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      // Total quantity will increase by 1
      state.totalQuantity++;
      // If there is no new item in existing item, push the data of the new one to the array
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      // If there is new item, this will increase the quantity of its as well as the total price
      // Total price is calculated as the total price of the new item and the price of current item
      else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
