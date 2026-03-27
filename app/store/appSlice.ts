import { createSlice } from '@reduxjs/toolkit';
import { Game } from '@/types';

export type AppState = {
  year: number;
  games: Game[];
};

const initialState: AppState = {
  games: [],
  year: 2020,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    }
  },
});

export const { setGames } = appSlice.actions;
export default appSlice.reducer;