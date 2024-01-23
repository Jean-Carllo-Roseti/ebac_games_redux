import { configureStore } from '@reduxjs/toolkit'

import carrinhoRecuder from './reducers/carrinho'

import api from '../services/api'
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoRecuder,
    [api.reducerPath]: api.reducer
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
