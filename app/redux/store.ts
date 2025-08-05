import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Usar AsyncStorage para React Native
import { combineReducers } from "redux";
import { superheroApi } from "./api/superheroApi";
import favoritesReducer from "./slices/favoritesSlice";
import heroesReducer from "./slices/heroesSlice";
import teamsReducer from "./slices/teamsSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  heroes: heroesReducer,
  teams: teamsReducer,
  [superheroApi.reducerPath]: superheroApi.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage, 
  whitelist: ["favorites", "heroes", "teams"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
      immutableCheck: false, 
    }).concat(superheroApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;