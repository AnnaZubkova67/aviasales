import { createSlice } from '@reduxjs/toolkit';

const transferSlice = createSlice({
  name: 'chekedTransfer',
  initialState: {
    stateCheck: [true, true, true, true, true],
  },
  reducers: {
    chooseAll: (state) => {
      if (state.stateCheck[0]) {
        state.stateCheck = state.stateCheck.map((item) => {
          item = false;
          return item;
        });
      } else {
        state.stateCheck = state.stateCheck.map((item) => {
          item = true;
          return item;
        });
      }
    },
    chooseOne: (state, action) => {
      state.stateCheck = state.stateCheck.map((item, i) => {
        if (i === 0 && state.stateCheck[action.payload.index]) {
          item = false;
        }
        let checkCount = 0;
        state.stateCheck.forEach((it) => {
          if (it) {
            checkCount += 1;
          }
        });

        if (checkCount === 3 && i === 0 && !state.stateCheck[action.payload.index]) {
          item = true;
        }

        if (i === action.payload.index) {
          item = !item;
        }
        return item;
      });
    },
  },
});

export const { chooseAll, chooseOne } = transferSlice.actions;

export default transferSlice.reducer;
