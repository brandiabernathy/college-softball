import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';

export const setupStore = (preloadedState?: unknown) => {
  return configureStore({
    reducer: {
      app: appReducer,
    },
    preloadedState,
  });
};

export const store = setupStore();

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];