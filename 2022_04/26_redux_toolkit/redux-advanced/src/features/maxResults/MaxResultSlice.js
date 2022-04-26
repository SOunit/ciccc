import { createSlice } from "@reduxjs/toolkit";

const MaxResultsSlice = createSlice({
  name: "maxResults",
  initialState: 5,
  reducers: {
    setMaxResult(state, action) {
      return action.payload;
    },
  },
});

export const { setMaxResult } = MaxResultsSlice.actions;
export default MaxResultsSlice.reducer;
