import { configureStore } from "@reduxjs/toolkit";
import { datasetApi } from "../../api/datasetsApi";

export const store = configureStore({
  reducer: {
    [datasetApi.reducerPath]: datasetApi.reducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(datasetApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
