import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ProductType from "./ProductType.ts";

// Define a type for the slice state
interface ProductState {
  products: ProductType[];
  isLoading: boolean;
  error: string;
  count: number;
  theme: boolean;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: "string",
  count: 0,
  theme: true,
};

export const productSlice = createSlice({
  name: "Product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.products.push({
        id: state.products.length,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        image: action.payload.image,
      });
      state.isBasket = true;
    },
    deleteFromCart: (state, action: PayloadAction<ProductType>) => {
      state.products.splice(state.products[action.payload], 1);
    },
    themeSwitch: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { addToCart, deleteFromCart, themeSwitch } = productSlice.actions;
export default productSlice.reducer;
