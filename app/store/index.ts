import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rememberReducer, rememberEnhancer } from 'redux-remember';

const isBrowser = typeof window !== 'undefined';
const storage = isBrowser ? window.sessionStorage : undefined;

import appReducer, { AppState } from './appSlice';

export type RootState = {
  app: AppState;
};

const rootReducer = combineReducers({
  app: appReducer,
});

const rememberedReducer = rememberReducer(rootReducer);

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rememberedReducer,
    preloadedState,
    enhancers: (getDefaultEnhancers) =>
      getDefaultEnhancers().concat(
        // Only add rememberEnhancer on the client side
        isBrowser && storage ? rememberEnhancer(storage, ['app']) : (store) => store
      ),
  });
};

export const store = setupStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;