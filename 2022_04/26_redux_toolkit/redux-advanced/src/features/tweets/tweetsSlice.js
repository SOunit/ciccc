import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

export const fetchTweets = (keyword, maxResults) => {
  return async (dispatch) => {
    try {
      dispatch(isLoadingTweets());
      const tweets = await findTweets(keyword, maxResults);
      dispatch(loadingTweetsSuccess(tweets));
    } catch (error) {
      const errorMsg = error.toString();
      dispatch(loadingTweetsFailure(errorMsg));
    }
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
    loadingTweetsFailure(state, payload) {
      state.isLoading = false;
      state.error = payload;
    },
    isLoadingTweets(state) {
      state.isLoading = true;
    },
  },
});

export const { loadingTweetsSuccess, isLoadingTweets, loadingTweetsFailure } =
  tweetsSlice.actions;
export default tweetsSlice.reducer;
