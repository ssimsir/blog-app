import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	blogs: [],
	categories: [],
	comments: [],
	loading: false,
	error: false,
};

const blogSlice = createSlice({
	name: "blog",
	initialState,
	reducers: {
      fetchStart : (state) => {
         state.loading=true
         state.error=false
      },
      getBlogSuccess : (state, {payload:{path, blogData}}) => {
         state.loading=false
         state[path]=blogData
      }
   },
});

export const {fetchStart, getBlogSuccess} = blogSlice.actions;

export default blogSlice.reducer;
