// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";

import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    conter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// test

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
