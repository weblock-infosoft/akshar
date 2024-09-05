import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import ourProductReducer from "./OurProductSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "ourproduct",
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  ourproduct: persistReducer(persistConfig, ourProductReducer),
});

const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default store;
