import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  error: null,
  loading: false
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductStart: (state) => {
      state.loading = true;
    },
    addProductSuccess: (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addProductFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    showProductStart: (state) => {
      state.loading = true;
    },
    showProductSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    showProductFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
    // updateProductStart: (state) => {
    //   state.loading = true;
    // },
    // updateProductSuccess: (state, action) => {
    //   const index = state.products.findIndex(product => product.id === action.payload.id);
    //   if (index !== -1) {
    //     state.products[index] = action.payload;
    //   }
    //   state.loading = false;
    //   state.error = null;
    // },
    // updateProductFail: (state, action) => {
    //   state.error = action.payload;
    //   state.loading = false;
    // },
    // deleteProductStart: (state) => {
    //   state.loading = true;
    // },
    // deleteProductSuccess: (state, action) => {
    //   state.products = state.filter((product) => product.id !== action.payload);
    //   // state.products = state.products.filter((product) => product.id !== action.payload);
    //   state.loading = false;
    //   state.error = null;
    // },
    // deleteProductFail: (state, action) => {
    //   state.error = action.payload;
    //   state.loading = false;
    // }
  }
});

export const {
  addProductStart,
  addProductSuccess,
  addProductFail,
  showProductStart,
  showProductSuccess,
  showProductFail,
  // updateProductStart,
  // updateProductSuccess,
  // updateProductFail,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFail
} = productSlice.actions;

export const selectProducts = (state) => state.product.products;

export default productSlice.reducer;
