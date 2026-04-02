import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
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

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;