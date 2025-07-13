import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import configReducer from './slices/configSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        config: configReducer,
    },
});
