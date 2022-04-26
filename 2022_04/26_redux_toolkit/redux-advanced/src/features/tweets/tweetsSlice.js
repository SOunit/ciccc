import { createSlice } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

export const fetchTweets = (keyword, maxResults) => {
  return async (dispatch) => {
    dispatch(isLoadingTweets());

    const tweets = await findTweets(keyword, maxResults);

    dispatch(loadingTweetsSuccess(tweets));
  };
};

const initialState = { tweets: [], isLoading: false, error: null };

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    // addTweets(state, payload) {
    //   state.tweets = payload;
    // },
    loadingTweetsSuccess(state, { payload }) {
      state.tweets = payload;
      state.isLoading = false;
      state.error = null;
    },
    isLoadingTweets(state) {
      state.isLoading = true;
    },
  },
});

export const { loadingTweetsSuccess, isLoadingTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
