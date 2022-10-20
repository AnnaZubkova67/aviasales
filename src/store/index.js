import { configureStore } from '@reduxjs/toolkit';

import transferReducer from './transferSlice';
import ticketReducer from './ticketSlice';
import filtersReducer from './filtersSlice';

export default configureStore({
  reducer: {
    transfer: transferReducer,
    ticket: ticketReducer,
    filter: filtersReducer,
  },
});
