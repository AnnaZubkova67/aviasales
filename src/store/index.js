import { configureStore } from '@reduxjs/toolkit';

import transferReducer from './transferSlice';

export default configureStore({
  reducer: {
    transfer: transferReducer,
  },
});
