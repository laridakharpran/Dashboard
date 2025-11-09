import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subcategories: [],
  error: null,
  loading: false
};

const subcategorySlice = createSlice({
  name: 'subcategory',
  initialState,
  reducers: {
    addSubcategoryStart: (state) => {
      state.loading = true;
    },
    addSubcategorySuccess: (state, action) => {
      state.subcategories.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addSubcategoryFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    showSubcategoryStart: (state) => {
      state.loading = true;
    },
    showSubcategorySuccess: (state, action) => {
      state.subcategories = action.payload;
      state.loading = false;
      state.error = null;
    },
    showSubcategoryFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  addSubcategoryStart,
  addSubcategorySuccess,
  addSubcategoryFail,
  showSubcategoryStart,
  showSubcategorySuccess,
  showSubcategoryFail
} = subcategorySlice.actions;

export const selectSubcategories = (state) => state.subcategory.subcategories;

export default subcategorySlice.reducer;