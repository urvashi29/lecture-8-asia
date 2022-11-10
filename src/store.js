import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; //counterReducer is coming from counterSlice.reducer
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./slices/postApi";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [postApi.reducerPath]: postApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(postApi.middleware)
    }
});

export default store;


setupListeners(store.dispatch);
