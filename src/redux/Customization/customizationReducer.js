import { createSlice } from '@reduxjs/toolkit';
import config from 'config';

const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

const customizationReducer = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    MENU_OPEN: (state, action) => {
      const id = action.payload;
      state.isOpen = [id];
    },
    SET_MENU: (state, action) => {
      state.opened = action.payload;
    },
    SET_FONT_FAMILY: (state, action) => {
      state.fontFamily = action.payload;
    },
    SET_BORDER_RADIUS: (state, action) => {
      state.borderRadius = action.payload;
    }
  }
});

export const { SET_BORDER_RADIUS, SET_FONT_FAMILY, SET_MENU, MENU_OPEN } = customizationReducer.actions;

export default customizationReducer.reducer;
