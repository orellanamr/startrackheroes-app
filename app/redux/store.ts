import { configureStore } from '@reduxjs/toolkit';
import { superheroApi } from './api/superheroApi';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    [superheroApi.reducerPath]: superheroApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desactivar la verificación de serializabilidad
    }).concat(superheroApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
