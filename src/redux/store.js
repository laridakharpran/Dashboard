import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { eventsApi } from "./eventsSlice";

import authReducer from './Auth/authSlice';
import productSlice from './Product/productSlice';
import subcategoruSlice from './Subcategory/subcategoruSlice';
import CategorySlice from './Categories/CategorySlice';
import profileSlice from './Profile/profileSlice';
// import tagsReducer from './Tags/tagsSlice';
import customizationReducer from './Customization/customizationReducer';
// import eventsReducer from './Events/eventsSlice';
// import staffsReducer from './Staff/staffSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productSlice,
  subcategory: subcategoruSlice,
  category: CategorySlice,
  profile: profileSlice,
  customization: customizationReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat
      // eventsApi.middleware,
      // tagsApi.middleware
      ()
});

export const persistor = persistStore(store);
