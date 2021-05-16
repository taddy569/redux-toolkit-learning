import { bindActionCreators, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCount } from "./counterAPI";
import { RootState } from "../../store";

export interface CounterState {
  status: 'idle' | 'loading' | 'failed';
  value: number;
}

const initialState: CounterState = {
  status: 'idle',
  value: 0,
}

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount)
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
  }
})

const { actions, reducer } = counterSlice

export const {
  increment, 
  decrement, 
  incrementByAmount,
} = actions

export default reducer