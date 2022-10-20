import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchID = createAsyncThunk('ticket/fetchID', async (_, { rejectWithValue }) => {
  try {
    let id = await fetch('https://front-test.dev.aviasales.ru/search');
    if (!id.ok) {
      throw new Error('Невозможно загрузить данные');
    }
    id = await id.json();
    return await id.searchId;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const fetchTicket = createAsyncThunk('ticket/fetchTicket', async (id, { rejectWithValue }) => {
  try {
    let res = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`);
    let numberOfRequest = 0;
    if (res.status === 500) {
      let status = 500;
      while (status === 500) {
        // eslint-disable-next-line no-await-in-loop
        res = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`);
        status = res.status;
        numberOfRequest += 1;
      }
    }
    if (numberOfRequest >= 5 || (!res.ok && res.status !== 500)) {
      throw new Error('Невозможно загрузить данные');
    }
    res = await res.json();
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    status: null,
    tickets: [],
    error: null,
    id: null,
    stop: false,
  },
  reducers: {},
  extraReducers: {
    [fetchID.fulfilled]: (state, action) => {
      state.id = action.payload;
      state.error = false;
    },
    [fetchID.rejected]: (state, action) => {
      state.status = 'rejected';
      state.status = action.payload;
      state.error = true;
    },
    [fetchTicket.pending]: (state) => {
      state.status = 'loading';
      state.error = false;
    },
    [fetchTicket.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.stop = action.payload.stop;
      state.tickets.push(...action.payload.tickets);
      state.error = false;
    },
    [fetchTicket.rejected]: (state, action) => {
      state.status = 'rejected';
      state.status = action.payload;
      state.error = true;
    },
  },
});

export default ticketSlice.reducer;
