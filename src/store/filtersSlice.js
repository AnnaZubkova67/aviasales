import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    cheap: false,
    fast: false,
    options: false,
  },
  reducers: {
    activeCheap: (state) => {
      state.cheap = true;
      state.fast = false;
      state.options = false;
    },
    activeFast: (state) => {
      state.cheap = false;
      state.fast = true;
      state.options = false;
    },
    activeOptions: (state) => {
      state.cheap = false;
      state.fast = false;
      state.options = true;
    },
  },
});

export const { activeCheap, activeFast, activeOptions } = filtersSlice.actions;

export default filtersSlice.reducer;
