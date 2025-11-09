import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentCategory: [],
    error: null,
    loading: false
  };

  const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      getCategoryStart: (state) => {
        state.loading = true;
      },
      getCategorySuccess: (state, action) => {
        state.currentCategory = action.payload;
        state.loading = false;
        state.error = null;
      },
      getCategoryFail: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }
    }
  });
  
  export const {
    getCategoryStart,
    getCategorySuccess,
    getCategoryFail} = categorySlice.actions;
  
  export const selectCategory = (state) => state.category.currentCategory;
//   export const selectCategoryError = (state) => state.category.error;
//   export const selectCategoryLoading = (state) => state.category.loading;
  
  export default categorySlice.reducer