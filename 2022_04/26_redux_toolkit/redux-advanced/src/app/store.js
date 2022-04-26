import { configureStore } from "@reduxjs/toolkit";

import maxResultsReducer from "../features/maxResults/MaxResultSlice";
import tweetsReducer from "../features/tweets/tweetsSlice";

export const store = configureStore({
  reducer: {
    maxResults: maxResultsReducer,
    tweets: tweetsReducer,
  },
});
