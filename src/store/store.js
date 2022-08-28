import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './shopping-cart/cartSlice';
import cartUiSlice from './shopping-cart/cartUISlice';
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUiSlice.reducer,
  },
});

export default store;
