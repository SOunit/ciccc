import { configureStore } from "@reduxjs/toolkit";

import maxResultsReducer from "../features/maxResults/MaxResultSlice";

export const store = configureStore({
  reducer: {
    maxResults: maxResultsReducer,
  },
});
