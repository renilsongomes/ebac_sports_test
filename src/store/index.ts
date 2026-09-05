import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import favoritesReducer from './favoritesSlice'
import { productsApi } from './api/productsApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favoritos: favoritesReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
